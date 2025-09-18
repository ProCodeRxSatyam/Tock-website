import express from 'express';
import session  from 'express-session';
import passport from 'passport';


import "./config/passport.js";

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
app.use(passport.session());



export default app;