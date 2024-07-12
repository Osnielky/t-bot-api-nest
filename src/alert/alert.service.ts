import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AlertDto } from './dto/alert.dto';
import { OrderSignal } from 'src/common/order.signal';
import { OrderType } from 'src/common/custom-types';
//import { RedisRepositoryService } from 'src/cache/redis-repository/redis-repository.service';
@Injectable()
export class AlertService {
  constructor(private httpService: HttpService) {}

  async testAlert(alertData: AlertDto): Promise<OrderSignal> {
    console.log(alertData);

    const order = {
      type: 'BUY' as OrderType,
      conditionMatch: 75,
      symbol: 'AAL',
      orderType: 'LIMIT',
      orderPrice: 14.5,
    };

    return order;
  }
}
