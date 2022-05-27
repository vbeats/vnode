import { HttpException, HttpStatus } from '@nestjs/common'

export class AppException extends HttpException {
  constructor(code: HttpStatus, msg: string) {
    super(msg, code)
  }
}
