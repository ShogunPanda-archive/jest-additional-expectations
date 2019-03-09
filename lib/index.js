"use strict";
/// <reference types="jest" />
Object.defineProperty(exports, "__esModule", { value: true });
const matchers_1 = require("./matchers");
const jestExpect = global.expect;
if (jestExpect) {
    jestExpect.extend({ toHaveHTTPStatus: matchers_1.toHaveHTTPStatus, toBeJSON: matchers_1.toBeJSON, toBeText: matchers_1.toBeText });
}
else {
    throw new Error('Unable to find jest expect. Please install the jest module.');
}
// declare namespace jest {
//   interface Matchers<R> {
//     toHaveHTTPStatus(expected: number): R
//     toBeJSON(): R
//     toBeText(): R
//   }
// }
