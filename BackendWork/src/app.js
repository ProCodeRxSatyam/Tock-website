import express from 'express';
import cors from "cors"
import session  from 'express-session';
import passport from 'passport';

import authRoutes from "./routes/authRoutes.js"
import "./config/passport.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
}));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/",authRoutes);

export default app;