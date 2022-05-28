import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Req } from '@nestjs/common'
import { Request } from 'express'
import { TestDto } from './dto/TestDto'
import { TestService } from './test.service'
import { AppException } from '../common/exception/app.exception'
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('test')
@ApiTags('测试controller')
export class TestController {
  constructor(private testService: TestService) {}

  @Get('/p/:id')
  @ApiOperation({ summary: '测试路由参数', description: '测试desc' })
  test(@Req() req: Request, @Param('id', ParseIntPipe) id: string): string {
    return this.testService.test(req, id)
  }

  @Post('testPost')
  @ApiOperation({ summary: '测试post请求' })
  @ApiBody({ type: TestDto })
  async testPost(@Req() req: Request, @Body() testDto: TestDto): Promise<string> {
    return this.testService.testPost(req, testDto)
  }

  @Get('testException')
  testException(): string {
    throw new AppException(HttpStatus.INTERNAL_SERVER_ERROR, 'testException')
  }
}
