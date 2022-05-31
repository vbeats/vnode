import { Controller, Get } from '@nestjs/common'
import { Queue } from 'bull'
import { InjectQueue } from '@nestjs/bull'

@Controller('queue')
export class QueueController {
  constructor(@InjectQueue('queue:test') private readonly testQueue: Queue) {}

  @Get('test')
  async test() {
    await this.testQueue.add(
      'testQueue',
      {
        payload: 'xxoo',
      },
      { removeOnComplete: true, removeOnFail: true },
    )
  }
}
