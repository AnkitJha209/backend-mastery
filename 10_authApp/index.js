import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import { router } from "./routes/route.js";

dotenv.config({
    path: "./env"
})

const app = express();

app.use(express.json())
connectDB();
app.use('/api/v1', router)

app.listen(process.env.PORT, () => {
    console.log(`Server Started at `, process.env.PORT)
})