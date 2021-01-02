import * as jAE from '../src'

describe('jest-additional-expectations', () => {
  describe('install', () => {
    it('should complain if jest is not available', () => {
      expect(() => jAE.install()).toThrow('Unable to find jest expect. Please install the jest module.')
    })
  })

  describe('toBeObject', () => {
    it('should work in positive matching', () => {
      expect(() => expect({}).toBeObject()).not.toThrow()
      expect(() => expect(1).toBeObject()).toThrow('expected value to be a object, got number instead')
      expect(() => expect([]).toBeObject()).toThrow('expected value to be a object, got array instead')
    })

    it('should work in negative matching', () => {
      expect(() => expect({}).not.toBeObject()).toThrow('expected value not to be a object')
      expect(() => expect(1).not.toBeObject()).not.toThrow()
    })
  })

  describe('toBeArray', () => {
    it('should work in positive matching', () => {
      expect(() => expect([]).toBeArray()).not.toThrow()
      expect(() => expect(1).toBeArray()).toThrow('expected value to be an array, got number instead')
    })

    it('should work in negative matching', () => {
      expect(() => expect([]).not.toBeArray()).toThrow('expected value not to be an array')
      expect(() => expect(1).not.toBeArray()).not.toThrow()
    })
  })

  describe('toEmpty', () => {
    it('should work in positive matching', () => {
      expect(() => expect([]).toBeEmpty()).not.toThrow()
      expect(() => expect([1]).toBeEmpty()).toThrow('expected value to be empty')
      expect(() => expect(1).toBeEmpty()).toThrow('expected value to be iterable and empty, but it is not iterable')
    })

    it('should work in negative matching', () => {
      expect(() => expect([]).not.toBeEmpty()).toThrow('expected value not to be empty')
      expect(() => expect([1]).not.toBeEmpty()).not.toThrow()
    })
  })

  describe('toHaveHTTPStatus', () => {
    it('should work in positive matching', () => {
      expect(() => expect({ statusCode: 200 }).toHaveHTTPStatus(200)).not.toThrow()
      expect(() => expect({ statusCode: 400 }).toHaveHTTPStatus(200)).toThrow(
        'expected response to have HTTP status 200 but it has HTTP status 400'
      )
    })

    it('should work in negative matching', () => {
      expect(() => expect({ statusCode: 200 }).not.toHaveHTTPStatus(200)).toThrow(
        'expected response not to have HTTP status 200'
      )
      expect(() => expect({ statusCode: 400 }).not.toHaveHTTPStatus(200)).not.toThrow()
    })
  })

  describe('toBeJSON', () => {
    it('should work in positive matching', () => {
      expect(() => expect({ headers: { 'content-type': 'application/json' } }).toBeJSON()).not.toThrow()
      expect(() => expect({ headers: { 'content-type': 'text/plain' } }).toBeJSON()).toThrow(
        'expected response to be JSON, but got "text/plain" type instead'
      )
      expect(() => expect({ headers: {} }).toBeJSON()).toThrow(
        'expected response to be JSON, but got undefined type instead'
      )
    })

    it('should work in negative matching', () => {
      expect(() => expect({ headers: { 'content-type': 'application/json' } }).not.toBeJSON()).toThrow(
        'expected response not to be JSON'
      )
      expect(() => expect({ headers: { 'content-type': 'text/plain' } }).not.toBeJSON()).not.toThrow()
    })
  })

  describe('toBeText', () => {
    it('should work in positive matching', () => {
      expect(() => expect({ headers: { 'content-type': 'text/plain' } }).toBeText()).not.toThrow()
      expect(() => expect({ headers: { 'content-type': 'application/json' } }).toBeText()).toThrow(
        'expected response to be text, but got "application/json" type instead'
      )
      expect(() => expect({ headers: {} }).toBeText()).toThrow(
        'expected response to be text, but got undefined type instead'
      )
    })

    it('should work in negative matching', () => {
      expect(() => expect({ headers: { 'content-type': 'text/plain' } }).not.toBeText()).toThrow(
        'expected response not to be text'
      )
      expect(() => expect({ headers: { 'content-type': 'application/json' } }).not.toBeText()).not.toThrow()
    })
  })
})
