import { HttpService } from '@nestjs/axios';
import { AlertDto } from './dto/alert.dto';
import { OrderSignal } from 'src/common/order.signal';
export declare class AlertService {
    private httpService;
    constructor(httpService: HttpService);
    testAlert(alertData: AlertDto): Promise<OrderSignal>;
}
