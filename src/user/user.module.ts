import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schema/user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema, collection: 'user' }])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
