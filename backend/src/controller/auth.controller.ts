import bcrypt from 'bcrypt';
import { User } from './../models/user.model';
import * as jwt from "jsonwebtoken"
import { Request, Response } from "express"

export const login = async (req: Request, res: Response) => {
    const { password, email } = req.body

    if (!password || !email) res.status(400).json({ message: "All Fields must be not empty" })

    const user = await User.findOne({ email }).exec()
    if (!user) res.status(401).json({ message: "UNAUTHORIZED" })

    const compared = await bcrypt.compare(password, user.password.toString())
    if (!compared) res.status(401).json({ message: "UNAUTHORIZED" })

    const accessToken = jwt.sign({
        "user": {
            "username": user.username,
            "password": user.password,
        }
    }, process.env.JWT_SECRET as string)



}
