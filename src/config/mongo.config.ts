import { registerAs } from '@nestjs/config'
import { MongooseModuleOptions } from '@nestjs/mongoose'

const connectionFactory = {
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  retryAttempts: Number.MAX_VALUE,
  retryDelay: 1500,
  autoCreate: true,
  maxIdleTimeMS: 30000,
  maxPoolSize: 64,
  minPoolSize: 32,
  socketTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

export default registerAs('mongo', (): MongooseModuleOptions => connectionFactory)
