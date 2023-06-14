import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { FeedDto } from '../dto/feed.dto';
import * as moment from 'moment';
import { FeedQueryParams } from '../interfaces/feed.interface';

export const FeedQueryParamsDecorator = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()

    const params: FeedQueryParams = {} as any
    if (req.body.type) {
        params.type = req.body.type as string
    }
    if (req.body.title) {
        params.title = req.body.title as string
    }
    if (req.body.source) {
        params.source = req.body.source as string
    }
    if (req.body.description) {
        params.description = req.body.description as string
    }
    if (req.body.dateNotice) {
        params.dateNotice = moment(req.body.noticeDate, 'DD-MM-YYYY').toDate()
    }
    if (req.body.content) {
        params.content = req.body.content as string
    }
    if (req.body.autor) {
        params.autor = req.body.autor as string
    }
    if (req.body.url) {
        params.url = req.body.url as string
    }
    if (req.body.state) {
        params.state = req.body.state as string
    }

    return params;
})