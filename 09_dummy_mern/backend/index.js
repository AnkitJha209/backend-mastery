import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/connectDB.js'
import { router } from './routes/route.js'
import cors from 'cors'

dotenv.config({
    path: './env'
})

const app = express()
const port = process.env.PORT || 8000


app.use(express.json());
app.use(cors())
app.use('/api/v1', router)


connectDB();

app.listen(port, () => {
    console.log("Server started at ", port)
})