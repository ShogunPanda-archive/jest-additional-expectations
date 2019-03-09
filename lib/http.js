"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO@PI: Handle not.to
function toHaveHTTPStatus(res, expected) {
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
exports.toHaveHTTPStatus = toHaveHTTPStatus;
// TODO@PI: Handle not.to
function toBeJSON(res) {
    const received = res.headers['content-type'];
    if (received && received.startsWith('application/json')) {
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
exports.toBeJSON = toBeJSON;
// TODO@PI: Handle not.to
function toBeText(res) {
    const received = res.headers['content-type'];
    if (received && received.startsWith('text/plain')) {
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
exports.toBeText = toBeText;
