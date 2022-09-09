import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtAccessAuthGuardHandle } from './jwt-access.guard';

@Injectable()
export class JwtAccessStrategy extends PassportStrategy(
  Strategy,
  JwtAccessAuthGuardHandle,
) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getOrThrow('jwt_access_secret'),
    });
  }

  async validate(payload: any) {
    return { username: payload.username };
  }
}
