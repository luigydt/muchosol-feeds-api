import { Controller, Get, Post, Patch, Delete, Query } from '@nestjs/common';
import { Feed, FeedQueryParams } from '../interfaces/feed.interface';
import { FeedService } from '../services/feed.service';
import { FeedDto } from '../dto/feed.dto'
import { FeedDecorator } from '../decorators/feed.decorator';
import { FeedModelDecorator } from '../decorators/feed.one.decorator';
import { feedModuleConfig } from '../config';
import { FeedScrapingService } from '../services/feed.scraping.service';
import { Url } from '../decorators/url.decorator';
import { FeedQueryParamsDecorator } from '../decorators/feed.query.decorator';
import { PaginationDecorator } from 'src/pagination/decorators/pagination.decorator';
import { PaginationInterface } from 'src/pagination/interfaces/pagination.interface';
import { SortDecorator } from 'src/sort/decorators/sort.decorator';
import { SortInterface } from 'src/sort/interfaces/sort.interface';


@Controller('feeds')
export class FeedController {
    constructor(
        protected readonly feedService: FeedService,
        protected readonly feedScrapService: FeedScrapingService
    ) { }
    //TODO:Params
    @Get('/')
    async getAllFeeds(
        @FeedQueryParamsDecorator() params: FeedQueryParams,
        @PaginationDecorator() pagination: PaginationInterface,
        @SortDecorator() sort: SortInterface
    ): Promise<Feed[]> {
        return await this.feedService.getAllFeeds(params, pagination, sort);
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
