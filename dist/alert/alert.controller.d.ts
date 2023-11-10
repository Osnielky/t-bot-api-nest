import { AlertService } from './alert.service';
import { AlertDto } from './dto/alert.dto';
export declare class AlertController {
    private readonly alertService;
    constructor(alertService: AlertService);
    handleAlert(alertData: AlertDto): Promise<string>;
}
