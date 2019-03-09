import { toBeArray, toBeEmpty, toBeObject } from './general'
import { toBeJSON, toBeText, toHaveHTTPStatus } from './http'

const jestExpect: jest.Expect = (global as any).expect

if (jestExpect) {
  jestExpect.extend({ toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText })
} else {
  throw new Error('Unable to find jest expect. Please install the jest module.')
}

export { toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText }
