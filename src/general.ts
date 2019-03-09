import { ExpectResult } from './types'

// TODO@PI: Handle not.to
export function toBeObject(target: any): ExpectResult {
  const received = Array.isArray(target) ? 'array' : typeof target

  return {
    message: () => `expected value to be a object, got ${received} instead`,
    pass: received === 'object'
  }
}

// TODO@PI: Handle not.to
export function toBeArray(target: any): ExpectResult {
  const received = Array.isArray(target) ? 'array' : typeof target

  return {
    message: () => `expected value to be an array, got ${received} instead`,
    pass: received === 'array'
  }
}

// TODO@PI: Handle not.to
export function toBeEmpty(target: any): ExpectResult {
  if (typeof target[Symbol.iterator] !== 'function') {
    return {
      message: () => 'expected value to be iterable and empty, but it is not iterable',
      pass: false
    }
  }

  const first = target[Symbol.iterator]().next()

  return {
    message: () => 'expected value to be empty',
    pass: first.done
  }
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeObject(): R
      toBeArray(): R
      toBeEmpty(): R
    }
  }
}
