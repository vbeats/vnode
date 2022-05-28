import { Injectable } from '@nestjs/common'
import { Interval } from '@nestjs/schedule'
import * as dayjs from 'dayjs'

@Injectable()
export class TjobService {
  // @Cron('5 * * * * *')
  @Interval(15000)
  async handleCron() {
    console.log(dayjs().format('YYYY-MM-DD HH:mm:ss'), 'Cron job executed...........')
  }
}
