import { Module } from '@nestjs/common'
import { TjobService } from './tjob.service'

@Module({
  providers: [TjobService],
})
export class TjobModule {}
