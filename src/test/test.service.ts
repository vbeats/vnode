import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'
import { Request } from 'express'
import { TestDto } from './dto/TestDto'

@Injectable()
export class TestService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  test(req: Request, id: string): string {
    console.log(req.header('host'), id)
    return 'test'
  }

  async testPost(req: Request, testDto: TestDto): Promise<string> {
    console.log(req.header('host'), testDto)
    await this.cacheManager.set('test', 'test', { ttl: 10 })
    console.log(await this.cacheManager.get('test'))
    return 'test..post'
  }
}
