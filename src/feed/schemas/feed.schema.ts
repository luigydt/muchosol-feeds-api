import { Schema } from "mongoose";


export const FeedSchema = new Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    hash: { type: String, required: true },
    noticeDate: { type: Date },
    content: { type: String, },
    autor: { type: String },
    url: { type: String },
    state: { type: String },
}, { timestamps: true })
