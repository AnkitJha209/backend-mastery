import mongoose from "mongoose";
import dotenv  from "dotenv";

dotenv.config({
    path : './env'
})
// console.log(process.env.DATABASE_URL)
// console.log(process.env.PORT)

export const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}`
    )
    console.log("Db connected at ", connectionInstance.connection.host);
  } catch (err) {
    console.log("DB connection error");
  }
};

