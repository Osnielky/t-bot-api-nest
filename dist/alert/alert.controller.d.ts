import { AlertService } from './alert.service';
export declare class AlertController {
    private readonly alertService;
    constructor(alertService: AlertService);
    handleAlert(alertData: any): Promise<string>;
    convertAndSync(data: any): Promise<string>;
}
