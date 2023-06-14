import { Controller, Get, Post, Patch, Delete, Body, Res, Query } from '@nestjs/common';
import { Feed, FeedQueryParams } from '../interfaces/feed.interface';
import { FeedService } from '../services/feed.service';
import { FeedDto } from '../dto/feed.dto'
import { FeedDecorator } from '../decorators/feed.decorator';
import { FeedModelDecorator } from '../decorators/feed.one.decorator';
import { feedModuleConfig } from '../config';



@Controller('feeds')
export class FeedController {
    constructor(
        private feedService: FeedService
    ) { }

    @Get('/')
    async getAllFeeds(
        @Query() params: FeedQueryParams
    ): Promise<Feed[]> {
        return await this.feedService.getAllFeeds(params);
    }

    @Get(`:${feedModuleConfig.id}`)
    async getOneFeed(
        @FeedModelDecorator() feedHash: string
    ): Promise<Feed> {
        return await this.feedService.getOneFeed(feedHash);
    }

    @Post('/')
    async createFeed(
        @FeedDecorator() createFeedDto: FeedDto
    ): Promise<Feed> {
        return await this.feedService.createFeed(createFeedDto)

    }
}
