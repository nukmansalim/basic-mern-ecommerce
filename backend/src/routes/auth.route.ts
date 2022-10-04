import { login, refresh, logout } from './../controller/auth.controller';

import express from "express"

export const router = express.Router()

router.post("/login", login)
router.get("/refresh", refresh)
router.post("/logout", logout)

export const AuthRoutes = router 
