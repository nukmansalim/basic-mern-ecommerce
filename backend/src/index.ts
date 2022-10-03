import { AuthRoutes } from './routes/auth.route';
import { UserRoutes } from './routes/users.route';
import cookieParser from 'cookie-parser';
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.connect("mongodb://localhost:27017/mern-type", () => {
    console.log("Database is connected")
})
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/users", UserRoutes)
app.use("/auth", AuthRoutes)
app.listen("8001", () => {
    console.log("server is running on port 8080")
})


