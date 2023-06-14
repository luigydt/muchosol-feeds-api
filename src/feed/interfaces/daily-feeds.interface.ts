import { Feed } from "./feed.interface";

export interface DailyNotice {
    source: string;
    notices: Feed[]
}