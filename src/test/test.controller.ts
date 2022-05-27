import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { TestDto } from './dto/TestDto'
import { TestService } from './test.service'
import { AppException } from '../common/exception/app.exception'

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('/p/:id')
  test(@Req() req: Request, @Param('id', ParseIntPipe) id: string): string {
    return this.testService.test(req, id)
  }

  @Post('testPost')
  async testPost(@Req() req: Request, @Body() testDto: TestDto): Promise<string> {
    return this.testService.testPost(req, testDto)
  }

  @Get('testException')
  testException(): string {
    throw new AppException(HttpStatus.INTERNAL_SERVER_ERROR, 'testException')
  }
}
