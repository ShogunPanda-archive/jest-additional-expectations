"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const general_1 = require("./general");
exports.toBeArray = general_1.toBeArray;
exports.toBeEmpty = general_1.toBeEmpty;
exports.toBeObject = general_1.toBeObject;
const http_1 = require("./http");
exports.toBeJSON = http_1.toBeJSON;
exports.toBeText = http_1.toBeText;
exports.toHaveHTTPStatus = http_1.toHaveHTTPStatus;
function install(jestExpect) {
    if (!jestExpect) {
        throw new Error('Unable to find jest expect. Please install the jest module.');
    }
    jestExpect.extend({ toBeObject: general_1.toBeObject, toBeArray: general_1.toBeArray, toBeEmpty: general_1.toBeEmpty, toHaveHTTPStatus: http_1.toHaveHTTPStatus, toBeJSON: http_1.toBeJSON, toBeText: http_1.toBeText });
}
exports.install = install;
install(global.expect);
