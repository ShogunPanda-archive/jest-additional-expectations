import { ExpectResult } from './types'

export function toBeObject(target: any): ExpectResult {
  const received = Array.isArray(target) ? 'array' : typeof target

  if (received === 'object') {
    return {
      message: () => 'expected value not to be a object',
      pass: true
    }
  } else {
    return {
      message: () => `expected value to be a object, got ${received} instead`,
      pass: false
    }
  }
}

export function toBeArray(target: any): ExpectResult {
  const received = Array.isArray(target) ? 'array' : typeof target

  if (received === 'array') {
    return {
      message: () => 'expected value not to be an array',
      pass: true
    }
  } else {
    return {
      message: () => `expected value to be an array, got ${received} instead`,
      pass: false
    }
  }
}

export function toBeEmpty(target: any): ExpectResult {
  if (typeof target[Symbol.iterator] !== 'function') {
    return {
      message: () => 'expected value to be iterable and empty, but it is not iterable',
      pass: false
    }
  }

  const first = target[Symbol.iterator]().next()

  if (first.done) {
    return {
      message: () => 'expected value not to be empty',
      pass: true
    }
  } else {
    return {
      message: () => 'expected value to be empty',
      pass: false
    }
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
