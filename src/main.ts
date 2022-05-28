import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { AppExceptionFilter } from './common/filter/exception.filter'
import { TransformInterceptor } from './common/interceptor/transform.interceptor'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // 全局异常过滤器
  app.useGlobalFilters(new AppExceptionFilter())

  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())

  // swagger
  const swaggerOptions = new DocumentBuilder().setTitle('VNode').setDescription('vode api').setVersion('1.0.0').addBearerAuth().build()
  const document = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('doc', app, document)

  await app.listen(8090)
}

bootstrap()
