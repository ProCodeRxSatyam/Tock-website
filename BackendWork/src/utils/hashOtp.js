import crypto from "crypto";

const OTP_SECRET = process.env.OTP_SECRET;

export default function hashOTP(otp) {
  return crypto
    .createHmac("sha256", OTP_SECRET)
    .update(otp)
    .digest("hex");
}
