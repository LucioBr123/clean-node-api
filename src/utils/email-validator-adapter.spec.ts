import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Shold return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockImplementationOnce(false)
    const isValid = sut.isValid('invalid_email')
    expect(isValid).toBe(false)
  })
})

describe('EmailValidator Adapter', () => {
  test('Shold return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email')
    expect(isValid).toBe(true)
  })
})
