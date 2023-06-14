import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { FeedDto } from '../dto/feed.dto';
import * as moment from 'moment';

export const FeedDecorator = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()

    const feedDTO: FeedDto = new FeedDto();
    if (req.body.type) {
        feedDTO.type = req.body.type as string
    }
    if (req.body.title) {
        feedDTO.title = req.body.title as string
    }
    if (req.body.description) {
        feedDTO.description = req.body.description as string
    }
    if (req.body.source) {
        feedDTO.source = req.body.source as string
    }
    if (req.body.dateNotice) {
        feedDTO.dateNotice = moment(req.body.dateNotice, 'DD-MM-YYYY').toDate()
    }
    if (req.body.content) {
        feedDTO.content = req.body.content as string
    }
    if (req.body.autor) {
        feedDTO.autor = req.body.autor as string
    }
    if (req.body.url) {
        feedDTO.url = req.body.url as string
    }
    if (req.body.state) {
        feedDTO.state = req.body.state as string
    }

    return feedDTO;
});
