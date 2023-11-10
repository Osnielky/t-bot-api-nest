import { IsString } from 'class-validator';

export class AlertDto {
  @IsString()
  ticker: string;

  @IsString()
  message: string;
}
