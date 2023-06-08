import "dotenv/config";
import { connect } from "mongoose";

async function dbconnect(){
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

export default dbconnect;