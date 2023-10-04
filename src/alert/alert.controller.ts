import { Controller, Post, Body } from '@nestjs/common';
import { AlertService } from './alert.service';

@Controller('alert')
export class AlertController {
  constructor(private readonly alertService: AlertService) {}

  @Post()
  async handleAlert(@Body() alertData: any) {
    return this.alertService.processAlert(alertData);
  }
}
