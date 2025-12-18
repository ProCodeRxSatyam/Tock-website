// services/otpStore.js  (ESM)
import Redis from "ioredis";
import HashOtp from "../utils/hashOtp.js";

const redis = new Redis(process.env.REDIS_URL); 
// Example .env REDIS_URL = redis://localhost:6379

const OTP_EXPIRY = 5 * 60; // 5 min
const MAX_ATTEMPTS = 5;    // wrong tries allowed
const ATTEMPT_EXPIRY = 10 * 60; // block for 10 min if exceeded

//---------------------------------------------------------
// Save OTP
//---------------------------------------------------------
export async function saveOTP(email, otp) {
  const key = `otp:${email}`;

  // hash OTP before storing
  const hashedOtp = HashOtp(otp);

  // store OTP with expiry
  await redis.set(key, hashedOtp, "EX", OTP_EXPIRY);

  // reset attempt count
  const attemptKey = `otp_attempts:${email}`;
  await redis.del(attemptKey);

  return true;
}

//---------------------------------------------------------
// Verify OTP & attempt tracking
//---------------------------------------------------------
export async function verifyOTP(email, otp) {
  const key = `otp:${email}`;
  const attemptKey = `otp_attempts:${email}`;

  // check attempts
  const attempts = Number(await redis.get(attemptKey) || 0);
  if (attempts >= MAX_ATTEMPTS) {
    return { ok: false, reason: "Too many attempts, try later." };
  }

  const storedHashedOTP = await redis.get(key);
  if (!storedHashedOTP) {
    return { ok: false, reason: "OTP expired or invalid." };
  }
  const incomingHash = HashOtp(otp);

  // timing-safe compare
  const isValid = crypto.timingSafeEqual(
    Buffer.from(storedHashedOTP),
    Buffer.from(incomingHash)
  );

  if (!isValid) {
    await redis.incr(attemptKey);
    await redis.expire(attemptKey, ATTEMPT_EXPIRY);
    return { ok: false, reason: "Wrong OTP." };
  }

  // OTP correct — delete OTP
  await redis.del(key);
  await redis.del(attemptKey);

  return { ok: true };
}

//---------------------------------------------------------
// For Resending – prevent spam
//---------------------------------------------------------
export async function canRequestOTP(email) {
  const key = `otp:${email}`;
  const ttl = await redis.ttl(key);

  if (ttl > 0) {
    return { ok: false, wait: ttl }; // must wait until expiration
  }

  return { ok: true };
}
