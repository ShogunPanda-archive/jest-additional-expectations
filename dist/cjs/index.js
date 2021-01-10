"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = void 0;
const general_1 = require("./general");
const http_1 = require("./http");
function install(jestExpect) {
    if (!jestExpect) {
        throw new Error('Unable to find jest expect. Please install the jest module.');
    }
    jestExpect.extend({ toBeObject: general_1.toBeObject, toBeArray: general_1.toBeArray, toBeEmpty: general_1.toBeEmpty, toHaveHTTPStatus: http_1.toHaveHTTPStatus, toBeJSON: http_1.toBeJSON, toBeText: http_1.toBeText });
}
exports.install = install;
install(globalThis.expect);
__exportStar(require("./general"), exports);
__exportStar(require("./http"), exports);
__exportStar(require("./types"), exports);
