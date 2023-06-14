import { Injectable } from '@nestjs/common';
import { Feed, FeedQueryParams } from '../interfaces/feed.interface';
import { InjectModel } from '@nestjs/mongoose'
import { feedModuleConfig } from '../config';
import { Model } from 'mongoose';
import { FeedDto } from '../dto/feed.dto';
import * as randomstring from 'randomstring'

@Injectable()
export class FeedService {
    constructor(
        @InjectModel(feedModuleConfig.nameModel)
        private readonly feedModel: Model<Feed>) {
    }
    public async getAllFeeds(params: FeedQueryParams): Promise<Feed[]> {
        return await this.feedModel.find({
            
        });
    }

    public async createFeed(createFeedDto: FeedDto): Promise<Feed> {
        createFeedDto.hash = randomstring.generate(9);
        const createdFeed = await this.feedModel.create(createFeedDto);
        return createdFeed;
    }

    public async getOneFeed(hashId: string): Promise<Feed> {
        const feed = await this.feedModel.findOne({ hash: hashId });
        return feed;
    }
}
