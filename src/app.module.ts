import { MiddlewareConsumer, Module } from '@nestjs/common'
import { TestModule } from './test/test.module'
import { LoggerMiddleware } from './common/middlewire/logger.middleware'
import { ScheduleModule } from '@nestjs/schedule'
import { TjobModule } from './tasks/tjob.module'
import { ConfigModule } from '@nestjs/config'
import mongoConfig from './config/mongo.config'

@Module({
  imports: [ConfigModule.forRoot({ load: [mongoConfig] }), ScheduleModule.forRoot(), TestModule, TjobModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  // 中间件
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
