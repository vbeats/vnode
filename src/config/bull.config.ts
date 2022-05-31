import { registerAs } from '@nestjs/config'
import { BullModuleOptions } from '@nestjs/bull/dist/interfaces/bull-module-options.interface'

const connectionFactory = {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT) || 6379,
  },
}

export default registerAs('bull', (): BullModuleOptions => connectionFactory)
