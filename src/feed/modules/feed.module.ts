import { Module } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedController } from '../controllers/feed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedSchema } from '../schemas/feed.schema';
import { feedModuleConfig } from '../config';
import { FeedScrapingService } from '../services/feed.scraping.service';


@Module({
    imports: [

        MongooseModule.forFeature([{ name: feedModuleConfig.nameModel, schema: FeedSchema }])
    ],
    controllers: [FeedController],
    providers: [FeedService, FeedScrapingService]

})
export class FeedModule { }
