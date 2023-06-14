import { Document } from "mongoose";
export interface Feed extends Document {
    type: string;
    title: string;
    description: string;
    content: string;
    autor: string;
    url?: string;
    state: string;
    hash: string;
    dateNotice: Date;
    createdAt: Date;
    updatedAt: Date

}

export interface FeedQueryParams {
    type: string;
    date: string
}