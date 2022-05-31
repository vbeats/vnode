import { Process, Processor } from '@nestjs/bull'

@Processor('queue:test')
export class QueueProcessor {
  @Process('testQueue')
  async process(job: any) {
    console.log(job.data)
  }
}
