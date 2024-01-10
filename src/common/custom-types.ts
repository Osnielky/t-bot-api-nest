/**
 * Generic object with string key and any value.
 */
export type ObjectMap<K extends string | number, V> = { [key in K]: V };

/**
 * HTTP status code, used by HttpResponseDto.
 */
export type HttpStatusCode = 200 | 400 | 401 | 404 | 500;

/**
 * HTTP status, used by HttpResponseDto.
 */
export type HttpStatus = 'Error' | 'Success' | 'Queued';

/**
 * Order Types, used by orders.
 */
export type OrderType = 'BUY' | 'SELL' | 'SHORT';
