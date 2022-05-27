import { Injectable } from '@nestjs/common'
import { Request } from 'express'
import { TestDto } from './dto/TestDto'

@Injectable()
export class TestService {
  test(req: Request, id: string): string {
    console.log(req.header('host'), id)
    return 'test'
  }

  async testPost(req: Request, testDto: TestDto): Promise<string> {
    console.log(req.header('host'), testDto)
    return 'test..post'
  }
}
