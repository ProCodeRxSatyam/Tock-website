import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import GoogleStrategy from 'passport-google-oauth2'
import bcrypt from 'bcrypt';
import {db} from './database.js';
import { findUserById } from "../models/userModel.js";

//local Strategy
passport.use(new LocalStrategy (async (username , password,done)=>{
    try{
        const result = await db.query('SELECT * FROM "users" WHERE username = $1', [username]);
        if(result.rows.length ===0) return done(null,false,{message : "User not found !"});
        
        const user = result.rows[0];
        const valid = await bcrypt.compare(password,user.password_hash);

        if(!valid) return done(null,false,{message: "Invalid Password!"});
        return done(null,user);
    }catch(err){
        return done(err);
    }
}));

//Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: "http://localhost:5000/auth/google/tock",
   },
   async(accesToen,refreshToken,profile,done)=>{
    try{
        let uname = profile.name.givenName.toLowerCase().replace(/\s+/g, "");;
        let check = await db.query('SELECT username from "users" WHERE username = $1',[uname]);
        while(check.rows.length!=0){
            const rand = Math.floor(Math.random()*1000);
            uname = `${uname}${rand}`;
            check = await db.query('SELECT username FROM "users" WHERE username =$1',[uname]);
        }
        const result = await db.query('SELECT * FROM "users" WHERE email = $1',[profile.email]);
        if(result.rows.length === 0){
            const newUser = await db.query("INSERT INTO users (username,email,password_hash) VALUES ($1,$2,$3) RETURNING *",[uname,profile.email,"google"]);
            return done(null,newUser.rows[0]);
        };
        return done(null, result.rows[0]);
    }catch(err){
        return done(err);
    }
   }

));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
    try {
        const user = await findUserById(id);
        if (!user) {
            // User was deleted from database 
            return done(null, false); // Or clear the session 
        }
        done(null, user);
    } catch (error) {
        done(error);
    }
});