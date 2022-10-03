import { login } from './../controller/auth.controller';

import express from "express"

export const router = express.Router()

router.post("/", login)

export const AuthRoutes = router 
