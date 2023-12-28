import { Controller, Post, Body } from '@nestjs/common';
import { AlertService } from './alert.service';


@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  async handleAlert(@Body() alertData: any) {
    // add a DTo to the alert received
    return this.alertService.testAlert(alertData);
  }

  @Post('numbers')
  async convertAndSync(@Body() data: any) {
    console.log(data);

    return 'alert received';
  }
}
