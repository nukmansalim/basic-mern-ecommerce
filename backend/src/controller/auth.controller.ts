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
        }
    }, process.env.JWT_SECRET as string,
        { expiresIn: "15m" }
    )

    const refreshToken = jwt.sign({
        "user": {
            "username": user.username,
        }
    }, process.env.JWT_SECRET as string,
        { expiresIn: "7d" }
    )
    res.cookie("token", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'none',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({ accessToken })

}

export const refresh = async (req: Request, res: Response) => {
    const cookies = req.cookies
    if (!cookies?.token) return res.status(403).json({ message: "Forbidden" })
    const refreshToken = cookies.token

    jwt.verify(
        refreshToken,
        process.env.JWT_SECRET,
        async (err: Error, decoded: any) => {
            if (err) return res.status(403).json({ message: "Forbidden" })
            const user = await User.findOne({ username: decoded.username }).exec()
            if (!user) return res.status(401).json({ message: "Unauthorized" })

            const accessToken = jwt.sign({
                "user": {
                    "username": user.username,
                }
            }, process.env.JWT_SECRET as string,
                { expiresIn: "15m" }
            )
            res.json({ accessToken })
        }
    )
}

export const logout = async (req: Request, res: Response) => {
    const cookies = req.cookies
    if (!cookies?.token) return res.sendStatus(204)
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "none",
        secure: true
    })
    res.json({ message: "Logout success" })
}


