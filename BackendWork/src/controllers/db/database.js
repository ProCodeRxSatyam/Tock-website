import pg from "pg";
import env from "dotenv";

env.config();


console.log("PG_USER:", process.env.PG_USER);
console.log("PG_PASSWORD:", process.env.PG_PASSWORD, typeof process.env.PG_PASSWORD);
console.log("PG_PORT:", process.env.PG_PORT, typeof process.env.PG_PORT);

const {Pool} = pg;

const db = new Pool({
    user: process.env.PG_USER,
    host: process,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: 5433,
    max : 10,
    idleTimeoutMillis: 30000,
})

const connectDB = async ()=>{
    try {
        const client = await db.connect();
        console.log(`Postgres database connected !! DB HOST : ${client.connectionParameters.host}`);
        client.release();
    } catch (error) {
        console.log("Postgres Database connection error" ,error);
        process.exit(1);
    }
}

export default connectDB