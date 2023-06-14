import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { SortInterface } from '../interfaces/sort.interface';


export const SortDecorator = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const sort: SortInterface = {
        sort: req.query.sort
    }
    return sort;
})