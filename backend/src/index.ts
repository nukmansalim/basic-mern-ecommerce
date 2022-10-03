import { UsersRoute } from './routes/users.route';
import express from "express"
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017/mern-type", () => {
    console.log("Database is connected")
})
const app = express()

app.use(express.json())
app.use("/users", UsersRoute)
app.listen("8080", () => {
    console.log("server is running on port 8080")
})


