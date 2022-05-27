import { Injectable } from '@nestjs/common'
import { Interval } from '@nestjs/schedule'

@Injectable()
export class TjobService {
  // @Cron('5 * * * * *')
  @Interval(3000)
  async handleCron() {
    console.log(Date.now(), 'Cron job executed...........')
  }
}
