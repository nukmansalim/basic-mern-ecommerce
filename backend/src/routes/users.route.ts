import { getAllUsers, createNewUser } from './../controller/users.controller';
import express from "express"

export const router = express.Router()

router.get("/", getAllUsers)
router.post("/", createNewUser)

export const UserRoutes = router 
