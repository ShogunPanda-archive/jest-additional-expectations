import { Response } from 'got'

export function toHaveHTTPStatus(
  res: Response<string | object>,
  expected: number
): { message: () => string; pass: boolean } {
  const received = res.statusCode

  return {
    message: () => `expected response to have HTTP status ${expected} but it has HTTP status ${received}`,
    pass: received === expected
  }
}

export function toBeJSON(res: Response<string | object>): { message: () => string; pass: boolean } {
  const received = res.headers['content-type']

  return {
    message: () => `expected response to be JSON, but got ${JSON.stringify(received)} type instead`,
    pass: received ? received.startsWith('application/json') : false
  }
}

export function toBeText(res: Response<string | object>): { message: () => string; pass: boolean } {
  const received = res.headers['content-type']

  return {
    message: () => `expected response to be text, but got ${JSON.stringify(received)} type instead`,
    pass: received ? received.startsWith('text/plain') : false
  }
}
