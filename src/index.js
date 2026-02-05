import dotevn from 'dotenv'
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"
import { log } from "node:console"
import connectDB from "./db/index.js";

dotevn.config({
    path:'./env'
})

connectDB()
/*
import express from "express"
const app = express()
(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("Error:",error)
            throw error;
        })

        app.listen(process.env.PORT, ()=> {
            console.log("Server is listening on port no.", process.env.PORT);
            
        })
    } catch (error) {
        console.error("Error is:",error)
    }
})()
    */