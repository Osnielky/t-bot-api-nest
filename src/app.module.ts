import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlertModule } from './alert/alert.module';

@Module({
  imports: [AlertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
