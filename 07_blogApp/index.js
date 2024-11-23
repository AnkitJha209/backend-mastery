import express from 'express'
import dotenv from 'dotenv'
import { router } from './routes/blogRoutes.js'
import { connectDB } from './config/connectDB.js'

dotenv.config({
    path: './env'
})

const app = express()
connectDB();
app.use(express.json())
app.use('/api/v1', router)

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`)
})
