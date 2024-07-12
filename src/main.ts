import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina las propiedades extra del cuerpo del request
    }),
  );
  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
