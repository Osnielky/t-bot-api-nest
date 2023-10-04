import { HttpService } from '@nestjs/axios';
export declare class AlertService {
    private httpService;
    constructor(httpService: HttpService);
    processAlert(alertData: any): Promise<any>;
}
