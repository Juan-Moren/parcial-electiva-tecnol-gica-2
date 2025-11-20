const { add, subtract, multiply, divide } = require('../src/calculator');

describe('calculator', () => {
  test('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtracts numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies numbers', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('divides numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide by zero throws', () => {
    expect(() => divide(1, 0)).toThrow('division by zero');
  });

  test('type validation', () => {
    expect(() => add('a', 1)).toThrow();
    expect(() => subtract(1, 'b')).toThrow();
    expect(() => multiply({}, [])).toThrow();
    expect(() => divide(null, 1)).toThrow();
  });
});