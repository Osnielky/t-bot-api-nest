import { HttpService } from '@nestjs/axios';
import { AlertDto } from './dto/alert.dto';
import { OrderSignal } from 'src/common/order.signal';
import { RedisRepository } from 'src/cache/data-access/redis-client/redis-repo.service';
export declare class AlertService {
    private httpService;
    private redisRepo;
    constructor(httpService: HttpService, redisRepo: RedisRepository);
    testAlert(alertData: AlertDto): Promise<OrderSignal>;
}
