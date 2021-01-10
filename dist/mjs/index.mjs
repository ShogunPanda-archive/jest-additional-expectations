import { toBeArray, toBeEmpty, toBeObject } from "./general.mjs";
import { toBeJSON, toBeText, toHaveHTTPStatus } from "./http.mjs";
export function install(jestExpect) {
    if (!jestExpect) {
        throw new Error('Unable to find jest expect. Please install the jest module.');
    }
    jestExpect.extend({ toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText });
}
install(globalThis.expect);
export * from "./general.mjs";
export * from "./http.mjs";
export * from "./types.mjs";
