import { Module } from '@nestjs/common'
import { BullModule } from '@nestjs/bull'
import { QueueController } from './queue.controller'
import { QueueProcessor } from './queue.processor'
import { BullModuleOptions } from '@nestjs/bull/dist/interfaces/bull-module-options.interface'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'queue:test',
      useFactory: (config: ConfigService) => ({ ...config.get<BullModuleOptions>('bull') }),
      inject: [ConfigService],
    }),
  ],
  controllers: [QueueController],
  providers: [QueueProcessor],
})
export class QueueModule {}
