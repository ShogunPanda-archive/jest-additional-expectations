import { Response } from 'got';
export declare function toHaveHTTPStatus(res: Response<string | object>, expected: number): {
    message: () => string;
    pass: boolean;
};
export declare function toBeJSON(res: Response<string | object>): {
    message: () => string;
    pass: boolean;
};
export declare function toBeText(res: Response<string | object>): {
    message: () => string;
    pass: boolean;
};
