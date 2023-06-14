import { IsString, IsDate } from "class-validator";


export class FeedDto {

    @IsString()
    type: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    hash: string;

    @IsDate()
    noticeDate: Date

    @IsString()
    content: string;

    @IsString()
    autor: string;

    @IsString()
    source: string;

    @IsString()
    url?: string;

    @IsString()
    state: string;

}