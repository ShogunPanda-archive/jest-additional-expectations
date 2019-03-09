/// <reference types="jest" />

import { toBeJSON, toBeText, toHaveHTTPStatus } from './matchers'

const jestExpect: jest.Expect = (global as any).expect

if (jestExpect) {
  jestExpect.extend({ toHaveHTTPStatus, toBeJSON, toBeText })
} else {
  throw new Error('Unable to find jest expect. Please install the jest module.')
}

// declare namespace jest {
//   interface Matchers<R> {
//     toHaveHTTPStatus(expected: number): R
//     toBeJSON(): R
//     toBeText(): R
//   }
// }
