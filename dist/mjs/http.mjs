export function toHaveHTTPStatus(res, expected) {
    const received = res.statusCode;
    if (received === expected) {
        return {
            message: () => `expected response not to have HTTP status ${expected}`,
            pass: true
        };
    }
    else {
        return {
            message: () => `expected response to have HTTP status ${expected} but it has HTTP status ${received}`,
            pass: false
        };
    }
}
export function toBeJSON(res) {
    const received = res.headers['content-type'];
    if (received === null || received === void 0 ? void 0 : received.startsWith('application/json')) {
        return {
            message: () => 'expected response not to be JSON',
            pass: true
        };
    }
    else {
        return {
            message: () => `expected response to be JSON, but got ${JSON.stringify(received)} type instead`,
            pass: false
        };
    }
}
export function toBeText(res) {
    const received = res.headers['content-type'];
    if (received === null || received === void 0 ? void 0 : received.startsWith('text/plain')) {
        return {
            message: () => 'expected response not to be text',
            pass: true
        };
    }
    else {
        return {
            message: () => `expected response to be text, but got ${JSON.stringify(received)} type instead`,
            pass: false
        };
    }
}
