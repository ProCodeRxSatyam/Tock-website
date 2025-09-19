import pg from "pg";
import env from "@dotenvx/dotenvx";


env.config();


const {Pool} = pg;

const db = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
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

export {db,connectDB};