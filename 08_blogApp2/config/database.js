import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.DB_URL);
    console.log("DB connection Successfull");
    console.log(connectionInstance.connection.host);
  } catch (err) {
    console.log("Connection Error");
    process.exit(1);
  }
};
