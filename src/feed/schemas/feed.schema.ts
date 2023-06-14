import { Schema } from "mongoose";
import { feedModuleConfig } from "../config";


export const FeedSchema = new Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    hash: { type: String },
    noticeDate: { type: Date, default: null },
    content: { type: String, default: null },
    autor: { type: String, default: null },
    source: { type: String, default: null },
    url: { type: String, default: null },
    state: { type: String, enum: feedModuleConfig.stateEnun, default: feedModuleConfig.stateEnun.PUBLICADO },
}, { timestamps: true })

