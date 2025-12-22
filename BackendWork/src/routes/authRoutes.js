import express from "express";
import passport from "passport";
import { registerUser } from "../controllers/authControllers.js";
import {requestOtp,verifyOtpService} from "../services/otpService.js";

const router = express.Router();

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    req.login(user, (err) => {
      if (err) return next(err);

      return res.json({ message: "Login Sucessfull", user });
    });
  })(req,res,next);
});

router.post("/register",registerUser);
router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get(
  "/auth/google/tock",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // On success, send cookie/session
    res.redirect("http://localhost:3000/home"); // redirect frontend
  }
);
router.post("/emailverify",(req,res)=>{
  const {email} = req.body;
  requestOtp(email);
  res.json({message:"OTP sent to your email"});
});
router.post("/verifyOtp",async (req,res)=>{
  const {email,otp} = req.body;
  const isVerified = await verifyOtpService(email,otp);
  if(isVerified){
    res.json({message:"OTP verified successfully"});
  }else{
    res.status(400).json({message:"Invalid OTP"});
  }
});
export default router;
