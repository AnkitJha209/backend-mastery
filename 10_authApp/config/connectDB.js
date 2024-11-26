import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({
    path: "./env"
})

export const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(process.env.DB_URL).catch(err => console.log(err))
        console.log(connectionInstance.connection.host)
    }catch(err){
        console.log("Cannot Connect To DB")
    }
}