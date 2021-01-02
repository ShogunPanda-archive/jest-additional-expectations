import { toBeArray, toBeEmpty, toBeObject } from './general'
import { toBeJSON, toBeText, toHaveHTTPStatus } from './http'

export function install(jestExpect?: jest.Expect): void {
  if (!jestExpect) {
    throw new Error('Unable to find jest expect. Please install the jest module.')
  }

  jestExpect.extend({ toBeObject, toBeArray, toBeEmpty, toHaveHTTPStatus, toBeJSON, toBeText })
}

install((global as any).expect)

export * from './general'
export * from './http'
export * from './types'
