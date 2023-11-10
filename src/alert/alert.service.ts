import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AlertService {
  constructor(private httpService: HttpService) {}

  async testAlert(alertData: any): Promise<string> {
    console.log(alertData);

    return 'process alert hitted';
  }
}
