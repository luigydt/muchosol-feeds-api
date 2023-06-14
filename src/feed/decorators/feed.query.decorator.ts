import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import * as moment from 'moment';
import { FeedQueryParams } from '../interfaces/feed.interface';

export const FeedQueryParamsDecorator = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()

    const params: FeedQueryParams = {} as any
    if (req.query.type) {
        params.type = req.query.type as string
    }
    if (req.query.title) {
        params.title = req.query.title as string
    }
    if (req.query.source) {
        params.source = req.query.source as string
    }
    if (req.query.description) {
        params.description = req.query.description as string
    }
    if (req.query.dateNotice) {
        params.dateNotice = moment(req.query.dateNotice, 'DD-MM-YYYY').toDate()
    }
    if (req.query.content) {
        params.content = req.query.content as string
    }
    if (req.query.autor) {
        params.autor = req.query.autor as string
    }
    if (req.query.url) {
        params.url = req.query.url as string
    }
    if (req.query.state) {
        params.state = req.query.state as string
    }

    return params;
})