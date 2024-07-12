import { Module } from '@nestjs/common';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from 'src/cache/cache.module';
import { RedisRepositoryService } from 'src/cache/redis-repository/redis-repository.service';

@Module({
  imports: [HttpModule, CacheModule],
  controllers: [AlertController],
  providers: [AlertService, RedisRepositoryService],
})
export class AlertModule {}
