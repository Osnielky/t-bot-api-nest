import { OrderType } from './custom-types';
export interface OrderSignal {
    type: OrderType;
    conditionMatch: number;
    symbol: string;
    orderType: string;
    orderPrice: number;
}
