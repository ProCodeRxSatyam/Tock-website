import bcrypt from 'bcrypt';
import {createUser , findUserByEmail} from "../models/userModel.js"


const saltRoundes = 10;

export async function registerUser(req,res) {
    const {username,email,password} = req.body;
    
    try {
        const existingUser = await findUserByEmail(email);

        if(existingUser){return res.status(400).json({message: "User already exists"});}

        const hashedPassword = await bcrypt.hash(password,saltRoundes);

        const newUser = await createUser(username,email,hashedPassword);
        res.status(201).json({message: "User created succesfullly",user: newUser});
    } catch (err) {
        console.error("Error registering user: ",err);
        res.status(500).json({message: "Internal database/bcrypt server error!"});
    }
}