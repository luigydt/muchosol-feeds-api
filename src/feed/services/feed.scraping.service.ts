import { Injectable } from '@nestjs/common';
import { Feed } from '../interfaces/feed.interface';
import { InjectModel } from '@nestjs/mongoose'
import { feedModuleConfig } from '../config';
import { Model } from 'mongoose';
import axios from 'axios';
import cheerio from 'cheerio';
import * as iconv from 'iconv-lite'
import { FeedDto } from '../dto/feed.dto';

@Injectable()
export class FeedScrapingService {
    constructor(
        @InjectModel(feedModuleConfig.nameModel)
        private readonly feedModel: Model<Feed>) {
    }

    public async getData(url: string): Promise<void> {
        //Have to use this condition for utf-8 format in mundo.es
        const html = url.includes('elmundo.es')
            ? ((await axios.get(url, {
                responseType: 'arraybuffer',
            }))).data
            : ((await axios.get(url, {
                headers: {
                    'Accept': 'text/html',
                },
            }))).data;
        const htmlFormated = url.includes('mundo') ? iconv.decode(html, 'iso-8859-1') : html;
        const $ = cheerio.load(htmlFormated);
        const feedDtos: FeedDto[] = [];
        const htmlElement = url.includes('bbc.com') ? 'li' : 'article'
        $(htmlElement).each((index, element) => {

            const title = $(element).html();
            const $element = cheerio.load(title);
            const href = $element($element('a')[0]).attr('href');
            const spanTitle = $element($element('span')[0]).html();
            const feed: FeedDto = {
                url: url.includes('bbc.com') ? 'bbc.com' + href : href,
                title: spanTitle ?? '',
                content: $element($element('a')[0]).text(),
                autor: $element($element('a')[1]).text() === $element($element('a')[0]).text() ? null : $element($element('a')[1]).text(),
                dateNotice: new Date(),
                source: url
            };
            feedDtos.push(feed);
        });
        for (const feedDto of feedDtos) {
            await this.feedModel.create(feedDto)
        }
    }
}

