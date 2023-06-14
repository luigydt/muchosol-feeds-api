import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { feedModuleConfig } from '../config';

export const Url = createParamDecorator((data, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest()
    return req.body[feedModuleConfig.url];
});