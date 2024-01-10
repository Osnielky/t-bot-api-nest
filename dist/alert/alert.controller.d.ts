import { AlertService } from './alert.service';
export declare class AlertController {
    private readonly alertService;
    constructor(alertService: AlertService);
    handleAlert(alert: any): Promise<import("../common/order.signal").OrderSignal>;
    convertAndSync(data: any): Promise<string>;
    getAll(): string;
}
