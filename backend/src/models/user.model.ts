import { IUser } from './../interfaces/user.interface';
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const User = model("User", userSchema)