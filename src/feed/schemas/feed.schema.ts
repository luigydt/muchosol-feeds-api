import { Schema } from "mongoose";
import { feedModuleConfig } from "../config";


export const FeedSchema = new Schema({
    type: { type: String, required: true, default: feedModuleConfig.defaultNoticeType },
    title: { type: String, default: null },
    description: { type: String, default: null },
    hash: { type: String },
    noticeDate: { type: Date, default: null },
    content: { type: String, default: null },
    autor: { type: String, default: null },
    source: { type: String, default: null },
    url: { type: String, default: null },
    state: { type: String, enum: feedModuleConfig.stateEnun, default: feedModuleConfig.stateEnun.PUBLICADO },
}, { timestamps: true })

