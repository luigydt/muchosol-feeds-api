import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { PaginationInterface } from '../interfaces/pagination.interface';


export const PaginationDecorator = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const pagination: PaginationInterface = {} as any
    if (req.query.limit) {
        pagination.limit = Number(req.query.limit)
    }
    if (req.query.page) {
        pagination.page = Number(req.query.page)
    }
    if (req.query.skip) {
        pagination.skip = Number(req.query.skip)
    }

    return pagination;
})