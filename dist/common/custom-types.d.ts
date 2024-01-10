export type ObjectMap<K extends string | number, V> = {
    [key in K]: V;
};
export type HttpStatusCode = 200 | 400 | 401 | 404 | 500;
export type HttpStatus = 'Error' | 'Success' | 'Queued';
export type OrderType = 'BUY' | 'SELL' | 'SHORT';
