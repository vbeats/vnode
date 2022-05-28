import { Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '../entity/user.entity'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('add')
  create(): Promise<User> {
    return this.userService.create()
  }

  @Get('findAll')
  findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(id)
  }
}
