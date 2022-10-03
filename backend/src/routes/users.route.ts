import { getAllUsers } from './../controller/users.controller';
import express from "express"

export const router = express.Router()

router.get("/", getAllUsers)

export const UsersRoute = router 
