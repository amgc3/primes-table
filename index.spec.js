const { isPrime } = require('./index');

describe('isPrime', () => {
  it('returns false if n is less than or equal to 1', () => {
    expect(isPrime(1)).toBe(false);
  });
});
