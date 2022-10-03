
import { User } from './../models/user.model';
import express, { Request, Response } from "express"
import bcrypt from "bcrypt"
export const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find().select("-password").lean().exec()
    res.json(users)
}

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body

        if (!username || !password || !email) return res.status(400).json({ message: "all Fields must be not empty" })


        const duplicate = await User.findOne({ username }).lean().exec()
        if (duplicate) res.status(400).json({ message: "duplicate data" })
        else {

            const hashedPassword = await bcrypt.hash(password, 10)

            const newUser = await User.create({
                username, password: hashedPassword, email
            })
            res.status(201)
                .json({ message: `new User ${newUser.username} has been created` })
        }
    } catch (error) {
        console.log(error)
    }

}

export const updateUser = async (req: Request, res: Response) => {

}