import { IPost } from './../interfaces/post.interface';
import mongoose, { Schema, model } from "mongoose";

const PostSchema = new Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

export const Post = model("Post", PostSchema)