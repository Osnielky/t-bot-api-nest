import { OrderType } from './custom-types';

export interface OrderSignal {
  type: OrderType;
  conditionMatch: number; // % of the strategy that match
  symbol: string; //'ex' AAL
  orderType: string; //limit-market-stop
  orderPrice: number; //14.5
}
