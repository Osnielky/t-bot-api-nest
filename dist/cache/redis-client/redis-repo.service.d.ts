import Redis from 'ioredis';
export declare class RedisRepository {
    private readonly redisClient;
    private readonly redis;
    constructor(redisClient: Redis);
    getHello(): Promise<any>;
}
