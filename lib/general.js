"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO@PI: Handle not.to
function toBeObject(target) {
    const received = Array.isArray(target) ? 'array' : typeof target;
    return {
        message: () => `expected value to be a object, got ${received} instead`,
        pass: received === 'object'
    };
}
exports.toBeObject = toBeObject;
// TODO@PI: Handle not.to
function toBeArray(target) {
    const received = Array.isArray(target) ? 'array' : typeof target;
    return {
        message: () => `expected value to be an array, got ${received} instead`,
        pass: received === 'array'
    };
}
exports.toBeArray = toBeArray;
// TODO@PI: Handle not.to
function toBeEmpty(target) {
    if (typeof target[Symbol.iterator] !== 'function') {
        return {
            message: () => 'expected value to be iterable and empty, but it is not iterable',
            pass: false
        };
    }
    const first = target[Symbol.iterator]().next();
    return {
        message: () => 'expected value to be empty',
        pass: first.done
    };
}
exports.toBeEmpty = toBeEmpty;
