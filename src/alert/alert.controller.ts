import { Controller, Post, Body } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertDto } from './dto/alert.dto';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  async handleAlert(@Body() alertData: AlertDto) {  // add a DTo to the alert received
    return this.alertService.testAlert(alertData);
  }
}
