import { HttpService } from '@nestjs/axios';
export declare class AlertService {
    private httpService;
    constructor(httpService: HttpService);
    testAlert(alertData: any): Promise<string>;
}
