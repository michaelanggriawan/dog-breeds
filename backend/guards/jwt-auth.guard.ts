import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import * as jose from 'jose';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    let payload;
    const request = this.getAuthentication(context);
    const accessToken = request?.headers?.authorization?.split(' ')[1] ?? null;
    const userId = request?.headers['x-user-id'] || '';

    if (!accessToken) {
      throw new UnauthorizedException('unauthorized');
    }

    try {
      payload = jose.decodeJwt(accessToken);
    } catch (error) {
      throw new UnauthorizedException('unauthorized');
    }

    if (payload?.userId !== userId) {
      throw new ForbiddenException('invalid token');
    }

    if (payload.exp * 1000 < Date.now()) {
      throw new UnauthorizedException('session expired');
    }

    return true;
  }

  private getAuthentication(context: ExecutionContext) {
    let request;
    if (context.getType() === 'rpc') {
      request = context.switchToRpc().getData();
    } else if (context.getType() === 'http') {
      request = context.switchToHttp().getRequest();
    }

    return request;
  }
}
