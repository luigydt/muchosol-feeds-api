import { Controller, Get, Post, Patch, Delete, Body, Res, Query } from '@nestjs/common';
import { Feed, FeedQueryParams } from '../interfaces/feed.interface';
import { FeedService } from '../services/feed.service';
import { FeedDto } from '../dto/feed.dto'
import { FeedDecorator } from '../decorators/feed.decorator';
import { FeedModelDecorator } from '../decorators/feed.one.decorator';
import { feedModuleConfig } from '../config';
import { FeedScrapingService } from '../services/feed.scraping.service';
import { Url } from '../decorators/url.decorator';


@Controller('feeds')
export class FeedController {
    constructor(
        protected readonly feedService: FeedService,
        protected readonly feedScrapService: FeedScrapingService
    ) { }
    //TODO:Params
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
        return await this.feedService.createFeed(createFeedDto);
    }

    @Post('/feed-scrap')
    async createFeedFromScrap(
        @Url() url: string
    ): Promise<string> {
        this.feedScrapService.getData(url);
        return 'All notices start to add DB'
    }

    @Patch(`:${feedModuleConfig.id}`)
    async updateFeed(
        @FeedModelDecorator() feedHash: string,
        @FeedDecorator() updateFeedDto: FeedDto
    ): Promise<Feed> {
        return await this.feedService.updateFeed(feedHash, updateFeedDto)
    }

    @Delete(`:${feedModuleConfig.id}`)
    async deleteFeed(
        @FeedModelDecorator() feedHash: string,
    ): Promise<string> {
        this.feedService.deleteFeed(feedHash)
        return `Feed with id ${feedHash} was removed`
    }
}
