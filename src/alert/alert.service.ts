import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
@Injectable()
export class AlertService {
  constructor(private httpService: HttpService) {}

  async processAlert(alertData: any) {
    // Process the alert data as needed
    // For this example, let's just forward it directly

    const targetAPIUrl = 'https://example.com/api/target'; // Replace with your target API's endpoint

    const response = await this.httpService
      .post(targetAPIUrl, alertData)
      .toPromise();

    return response.data;
  }
}
