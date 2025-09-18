import db from "../config/database.js";

//for creating new users
export async function createUser(email,hashedPassword) {
    const result = await db.query(
        "INSERT INTO users (emil,password) VALUES ($1,$2) RETURNING id , email",
        [email,hashedPassword]
    );
    return result.rows[0];
}

//for finding user by eamil
export async function findUserByEmail(email) {
    const result = await db.query(
        "SELECT * FROM users WHERE emai = $1",
        [email]
    );
    return result.rows[0];    
}