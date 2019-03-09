"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO@PI: Handle not.to
function toHaveHTTPStatus(res, expected) {
    const received = res.statusCode;
    return {
        message: () => `expected response to have HTTP status ${expected} but it has HTTP status ${received}`,
        pass: received === expected
    };
}
exports.toHaveHTTPStatus = toHaveHTTPStatus;
// TODO@PI: Handle not.to
function toBeJSON(res) {
    const received = res.headers['content-type'];
    return {
        message: () => `expected response to be JSON, but got ${JSON.stringify(received)} type instead`,
        pass: received ? received.startsWith('application/json') : false
    };
}
exports.toBeJSON = toBeJSON;
// TODO@PI: Handle not.to
function toBeText(res) {
    const received = res.headers['content-type'];
    return {
        message: () => `expected response to be text, but got ${JSON.stringify(received)} type instead`,
        pass: received ? received.startsWith('text/plain') : false
    };
}
exports.toBeText = toBeText;
