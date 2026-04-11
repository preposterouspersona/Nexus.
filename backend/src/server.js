import express from "express";
import dotenv from "dotenv";
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";
const app=express();

const PORT= process.env.PORT || 5001;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.listen(ENV.PORT, ()=>{
    console.log("Server started :", ENV.PORT)
    connectDB();    
});