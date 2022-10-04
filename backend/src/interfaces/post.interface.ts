import { Types } from "mongoose"
export interface IPost {
    title: string
    description: string
    comments: Types.ObjectId[]
    author: Types.ObjectId
    tag: string[]
}