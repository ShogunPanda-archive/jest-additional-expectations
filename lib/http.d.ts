import { Response } from 'got';
import { ExpectResult } from './types';
export declare function toHaveHTTPStatus(res: Response<string | object>, expected: number): ExpectResult;
export declare function toBeJSON(res: Response<string | object>): ExpectResult;
export declare function toBeText(res: Response<string | object>): ExpectResult;
declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveHTTPStatus(expected: number): R;
            toBeJSON(): R;
            toBeText(): R;
        }
    }
}
