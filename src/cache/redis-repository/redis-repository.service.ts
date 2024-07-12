import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';
@Injectable()
export class RedisRepositoryService {
  private readonly redis: Redis;

  constructor(@Inject('RedisClient') private readonly redisClient: Redis) {}

  async getHello() {
    const cachedData = await this.redisClient.get('hello');
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    const data = { name: 'Hello World' };
    await this.redisClient.set(`hello`, JSON.stringify(data));
    return data;
  }

  // place to add more methods on set and get from redis
}
