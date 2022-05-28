import { registerAs } from '@nestjs/config'
import { RedisClientOptions } from 'redis'
import * as redisStore from 'cache-manager-redis-store'

const connectionFactory = {
  store: redisStore,
  url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`,
  socket: {
    connectTimeout: 30000,
    retries: Number.MAX_VALUE,
  },
}

export default registerAs('redis', (): RedisClientOptions => connectionFactory)
