const { isPrime } = require('./index');

describe('isPrime', () => {
  it('returns false if n is less than or equal to 1', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(- 11)).toBe(false);
  });
  it('returns true if n is equal to 2', () => {
    expect(isPrime(2)).toBe(true);
  });
  it('returns true if n is equal to 3', () => {
    expect(isPrime(3)).toBe(true);
  });
  it('returns false if n is a multiple of 2', () => {
      expect(isPrime(8)).toBe(false);
      expect(isPrime(22)).toBe(false);
  })
});
