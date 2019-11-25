import { ExpectResult } from './types';
export declare function toBeObject(target: any): ExpectResult;
export declare function toBeArray(target: any): ExpectResult;
export declare function toBeEmpty(target: any): ExpectResult;
declare global {
    namespace jest {
        interface Matchers<R> {
            toBeObject(): R;
            toBeArray(): R;
            toBeEmpty(): R;
        }
    }
}
