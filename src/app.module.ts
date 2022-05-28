import { CacheModule, MiddlewareConsumer, Module } from '@nestjs/common'
import { TestModule } from './test/test.module'
import { LoggerMiddleware } from './common/middlewire/logger.middleware'
import { ScheduleModule } from '@nestjs/schedule'
import { TjobModule } from './tasks/tjob.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import mongoConfig from './config/mongo.config'
import redisConfig from './config/redis.config'
import { RedisClientOptions } from 'redis'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module'
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      load: [mongoConfig, redisConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({ ...config.get<MongoConnectionOptions>('mongo') }),
      inject: [ConfigService],
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      isGlobal: true,
      useFactory: (config: ConfigService) => ({ ...config.get<RedisClientOptions>('redis') }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    TestModule,
    TjobModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // 中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
