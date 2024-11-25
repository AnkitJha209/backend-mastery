import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})

export const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(process.env.DB_URL)
        console.log("Connected to DB")
    }catch(err){
        console.log("Failed to connect to DB")
    }
}