import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import GoogleStrategy from 'passport-google-oauth2'
import bcrypt from 'bcrypt';
import db from './database.js';


//local Strategy
passport.use(new LocalStrategy (async (username , password,done)=>{
    try{
        const result = await db.query("SELCT * FROM user WHERE email = $1",[username]);
        if(result.rows.length ===0) return done(null,false,{message : "User not found !"});

        const user = result.rows[0];
        const valid = await bcrypt.compare(password,user.password);

        if(!valid) return done(null,false,{message: "Invalid Password!"});
        return done(null,user);
    }catch(err){
        return done(err);
    }
}));

//Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
   },
   async(accesToen,refreshToken,profile,done)=>{
    try{
        const result = await db.query("SELECT * FROM user WHERE email = $1",[profile.email]);
        if(result.rows.length === 0){
            const newUser = await db.query("INSERT INTO user (email,password) VALUES ($1,$2) RETURNING *",[profile.email,"google"]);
            return done(null,newUser.rows[0]);
        };
        return done(null, result.rows[0]);
    }catch(err){
        return done(err);
    }
   }

));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((user, done) => done(null, user.id));