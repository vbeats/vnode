import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User, UserDocument } from './schema/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async create(): Promise<User> {
    const u = new User()
    u.name = 'test'
    u.age = 10
    const user = await this.userModel.create(u)
    return user
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec()
  }

  async delete(id: string) {
    const deletedUser = await this.userModel.findByIdAndRemove({ _id: id }).exec()
    return deletedUser
  }
}
