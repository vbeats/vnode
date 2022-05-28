import { registerAs } from '@nestjs/config'
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions'

const connectionFactory: MongoConnectionOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URI || 'mongodb://localhost:27017/test',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
export default registerAs('mongo', (): MongoConnectionOptions => connectionFactory)
