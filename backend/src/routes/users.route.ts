import { getAllUsers, createNewUser } from './../controller/users.controller';
import express from "express"
import { verifyToken } from '../middleware/verifyToken';
export const router = express.Router()

router.get("/", verifyToken, getAllUsers)
router.post("/create", createNewUser)

export const UserRoutes = router 
