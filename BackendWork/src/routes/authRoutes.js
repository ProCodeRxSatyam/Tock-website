import express from "express";
import passport from "passport";
import { registerUser } from "../controllers/authControllers";

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


export default router;
