import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { feedModuleConfig } from '../config';

export const FeedModelDecorator = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()
    return req.params[feedModuleConfig.id];
});