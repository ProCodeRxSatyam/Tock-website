import { randomInt } from "crypto";
import { saveOTP, verifyOTP, canRequestOTP } from "../config/otpStore.js";
import {sendEmail} from "./mailer.js";

export async function requestOtp(email) {
  const check = await canRequestOTP(email);
  if (!check.ok) return { ok: false, reason: `Wait ${check.wait}s before requesting new OTP` };

  const otp = String(randomInt(100000, 999999)); // 6-digit OTP

  await sendEmail({ to: email, subject: "Your OTP Code", html: `<p>Your OTP is: ${otp}</p>` });

  await saveOTP(email, otp);

  return { ok: true, otp };  // remove otp in production
}

export async function verifyOtpService(email, otp) { 
  return await verifyOTP(email, otp);
}

