// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('isPhoneNumber - valid: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber - valid: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber - invalid: 123-45-67890', () => {
  expect(isPhoneNumber('123-45-67890')).toBe(false);
});
test('isPhoneNumber - invalid: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

// isEmail tests
test('isEmail - valid: user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});
test('isEmail - valid: my.email@domain.co', () => {
  expect(isEmail('myemail@domain.co')).toBe(true);
});
test('isEmail - invalid: noatsymbol.com', () => {
  expect(isEmail('noatsymbol.com')).toBe(false);
});
test('isEmail - invalid: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword - valid: Abc1234', () => {
  expect(isStrongPassword('Abc1234')).toBe(true);
});
test('isStrongPassword - valid: A_b1c2d3', () => {
  expect(isStrongPassword('A_b1c2d3')).toBe(true);
});
test('isStrongPassword - invalid: 123abc', () => {
  expect(isStrongPassword('123abc')).toBe(false);
});
test('isStrongPassword - invalid: abc!', () => {
  expect(isStrongPassword('abc!')).toBe(false);
});

// isDate tests
test('isDate - valid: 1/2/2024', () => {
  expect(isDate('1/2/2024')).toBe(true);
});
test('isDate - valid: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});
test('isDate - invalid: 2024/1/2', () => {
  expect(isDate('2024/1/2')).toBe(false);
});
test('isDate - invalid: 01-02-2024', () => {
  expect(isDate('01-02-2024')).toBe(false);
});

// isHexColor tests
test('isHexColor - valid: #abc', () => {
  expect(isHexColor('#abc')).toBe(true);
});
test('isHexColor - valid: a1b2c3', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});
test('isHexColor - invalid: #12345', () => {
  expect(isHexColor('#12345')).toBe(false);
});
test('isHexColor - invalid: #xyz', () => {
  expect(isHexColor('#xyz')).toBe(false);
});