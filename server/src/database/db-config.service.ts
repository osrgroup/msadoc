import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  /**
   * Used by NestJS to reach database.
   * Keep in sync with @see TypeOrm.config.ts
   */
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.getOrThrow('db_host'),
      port: +this.configService.getOrThrow('db_port'),
      username: this.configService.getOrThrow('db_user'),
      password: this.configService.getOrThrow('db_pw'),
      database: this.configService.getOrThrow('db_db'),
      entities: [
        join(__dirname, '**', '*.orm.{ts,js}'),
        join(__dirname, '**', '*.entity.{ts,js}'),
      ],
      migrationsTableName: 'migrations',
      migrationsRun: true,
      migrations: [join(__dirname, '**', '/migrations/*.{ts,js}')],
    };
  }
}
