import express from 'express'
import { connectDB } from './config/database.js';
import dotenv  from "dotenv";
import { router } from './routes/todos.js';


dotenv.config({
    path : './env'
})

const app = express();
app.use(express.json());

// import routes for TODO API
app.use("/api/v1", router)



connectDB();

app.get('/', (req, res) => {
    res.send("This is Home Page")
    }
)

app.listen(process.env.PORT, ()=>{
    console.log(`App is Running on 3000`)
})