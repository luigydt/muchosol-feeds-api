import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/modules/feed.module';
import { MongooseModule } from '@nestjs/mongoose'
import * as dontenv from 'dotenv'

dontenv.config()

@Module({
  imports: [FeedModule, MongooseModule.forRoot(process.env.DB_MONGO_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
