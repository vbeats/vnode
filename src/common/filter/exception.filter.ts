import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { Request, Response } from 'express'
import { AppException } from '../exception/app.exception'

@Catch(AppException)
export class AppExceptionFilter implements ExceptionFilter<AppException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    const status = exception.getStatus()

    response.status(HttpStatus.OK).json({
      status: status,
      msg: exception.getResponse(),
    })
  }
}
