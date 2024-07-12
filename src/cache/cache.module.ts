import { Module } from '@nestjs/common';
import { RedisRepositoryService } from './redis-repository/redis-repository.service';
import { redisClientFactory } from './providers/redis-client.factory';

@Module({
  providers: [RedisRepositoryService, redisClientFactory],
  exports: [RedisRepositoryService],
})
export class CacheModule {}
