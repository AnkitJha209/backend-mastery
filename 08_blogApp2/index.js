import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import { blogRouters } from "./routes/blogRoutes.js";

dotenv.config({
  path: "./env",
});
const app = express();

app.use(express.json());
app.use("/api/v1", blogRouters);

connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server Started at Port : ${process.env.PORT}`);
});
