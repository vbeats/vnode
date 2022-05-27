import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppExceptionFilter } from './common/filter/exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new AppExceptionFilter())

  await app.listen(8090)
}

bootstrap()
