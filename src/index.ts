import { toBeArray, toBeEmpty, toBeObject } from './general'
import { toBeJSON, toBeText, toHaveHTTPStatus } from './http'

function install(jestExpect?: jest.Expect): void {
  if (!jestExpect) {
    throw new Error('Unable to find jest expect. Please install the jest module.')
  }

  jestExpect.extend({ toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText })
}

install((global as any).expect)

export * from './types'
export { install, toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText }
