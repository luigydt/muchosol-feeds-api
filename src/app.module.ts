import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/modules/feed.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [FeedModule, MongooseModule.forRoot('mongodb+srv://user_1234:1234@cluster-luis.dx5gwm9.mongodb.net/?authMechanism=SCRAM-SHA-1')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
