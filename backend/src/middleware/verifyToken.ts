import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const authHeader = req.headers.authorization

        if (!authHeader) return res.status(401).json({ message: "UNAUTHORIZED" })
        const token = authHeader.split(" ")[1]

        verify(token,
            process.env.JWT_SECRET as string,
            (err, decoded) => {
                if (err) return res.status(403).json({ message: "FORBIDDEN" })
                return decoded
            }

        )
        next()
    } catch (error) {
        console.log(error)
    }
}