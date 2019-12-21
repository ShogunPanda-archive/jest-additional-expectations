/// <reference types="jest" />
import { toBeArray, toBeEmpty, toBeObject } from './general';
import { toBeJSON, toBeText, toHaveHTTPStatus } from './http';
declare function install(jestExpect?: jest.Expect): void;
export * from './types';
export { install, toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText };
