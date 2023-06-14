import { Injectable, NotFoundException } from '@nestjs/common';
import { Feed, FeedQueryParams } from '../interfaces/feed.interface';
import { InjectModel } from '@nestjs/mongoose'
import { feedModuleConfig } from '../config';
import { Model } from 'mongoose';
import { FeedDto } from '../dto/feed.dto';
import { createHash } from 'src/helper/helper.service';

const defaultProjection = '-_id -__v -createdAt -updatedAt -hash';
@Injectable()
export class FeedService {
    constructor(
        @InjectModel(feedModuleConfig.nameModel)
        private readonly feedModel: Model<Feed>) {
    }
    public async getAllFeeds(params: FeedQueryParams): Promise<Feed[]> {
        return await this.feedModel.find({}).select(defaultProjection);
    }

    public async createFeed(createFeedDto: FeedDto): Promise<Feed> {
        createFeedDto.hash = createHash()
        const createdFeed = await this.feedModel.create(createFeedDto);
        return createdFeed;
    }

    public async getOneFeed(hashId: string): Promise<Feed> {
        const feed = this.checkFeed(hashId, defaultProjection)
        return feed;
    }

    public async updateFeed(hashId: string, updateFeedDto: FeedDto): Promise<Feed> {
        const feed = this.checkFeed(hashId)
        return await this.feedModel.findByIdAndUpdate(feed, updateFeedDto).select(defaultProjection);
    }

    public async deleteFeed(hashId: string) {
        const feed = this.checkFeed(hashId)
        return await this.feedModel.findByIdAndDelete(feed);
    }

    private async checkFeed(hashId: string, project?: string): Promise<Feed> {
        const feed = project
            ? await this.feedModel.findOne({ hash: hashId }).select(project)
            : await this.feedModel.findOne({ hash: hashId });
        if (!feed) {
            throw new NotFoundException('Feed Not Exist')
        }
        return feed;
    }
}

