import mongoose from "mongoose"
import {ENV} from "./env.js"


export const connectDB = async () =>{

    try{
        const conn=await mongoose.connect(ENV.MONGO_URL);

        console.log("MONGODB connected succesfully.", conn.connection.host);

    }
    catch(error){
        console.log("error connecting to MONGODB", error);
        process.exit(1);
    }
}

