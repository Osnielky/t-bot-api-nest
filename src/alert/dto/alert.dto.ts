import { IsOptional, IsString } from 'class-validator';

export class AlertDto {
  @IsOptional()
  indicator: string;

  @IsString()
  ticker: string;

  @IsString()
  message: string;
}
