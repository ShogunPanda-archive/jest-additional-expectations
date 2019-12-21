/// <reference types="node" />
import { IncomingHttpHeaders } from 'http';
export interface ExpectResult {
    message: () => string;
    pass: boolean;
}
export interface HTTPResponse<Body = object> {
    statusCode: number;
    headers: IncomingHttpHeaders;
    body: Body;
}
