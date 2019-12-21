/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
import { ExpectResult } from './types';
export interface HTTPResponse<Body = object> {
    statusCode: number;
    headers: IncomingHttpHeaders;
    body: Body;
}
export declare function toHaveHTTPStatus(res: HTTPResponse, expected: number): ExpectResult;
export declare function toBeJSON(res: HTTPResponse): ExpectResult;
export declare function toBeText(res: HTTPResponse): ExpectResult;
declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveHTTPStatus(expected: number): R;
            toBeJSON(): R;
            toBeText(): R;
        }
    }
}
