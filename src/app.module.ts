import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from 'ormconfig';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MovieModule, UserModule, AuthModule, TypeOrmModule.forRoot(dbConfig), CacheModule.register(
    {
      store: redisStore,
      ttl: 10 * 1000,
      isGlobal: true,
      url: process.env.REDIS_URL
    }
  ), AuthModule,],
  controllers: [AppController],
  providers: [AppService, { provide: APP_INTERCEPTOR, useClass: CacheInterceptor }],
})
export class AppModule { }
