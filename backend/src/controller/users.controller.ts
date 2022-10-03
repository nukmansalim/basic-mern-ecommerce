import { User } from './../models/user.model';
import express, { Request, Response } from "express"

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await User.find().select("-password").lean().exec()
    res.json(users)
}