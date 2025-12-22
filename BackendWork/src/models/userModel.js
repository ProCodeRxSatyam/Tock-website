import {db} from "../config/database.js";




//for creating new users
export async function createUser(username,email,hashedPassword) {
    const result = await db.query(
        "INSERT INTO users (username,email,password_hash) VALUES ($1,$2,$3) RETURNING id , email",
        [username,email,hashedPassword]
    );
    return result.rows[0];
}

//for finding user by eamil
export async function findUserByEmail(email) {

    const result = await db.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];    
}

export async function findUserById(id)  {
    const result = await db.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );
    return result.rows[0];
}

export async function setEmailVerified(email) {
    const result = await db.query(
        "UPDATE users SET email_verified = true WHERE email = $1 RETURNING *",
        [email]
    );
    return result.rows[0];
}