const { isPrime, generatePrimes, generateTable } = require('./prime');

describe('isPrime', () => {
  it('returns false if n is less than or equal to 1', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(-11)).toBe(false);
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
  });
  it('returns false if n is a multiple of 3', () => {
    expect(isPrime(9)).toBe(false);
    expect(isPrime(27)).toBe(false);
  });
  it('returns true if n is equal to 5', () => {
    expect(isPrime(5)).toBe(true);
  });
  it('returns true if n ie equal to 7', () => {
    expect(isPrime(7)).toBe(true);
  });
  it('return false for multiples of 5', () => {
    expect(isPrime(25)).toBe(false);
  });
  it('return false for multiples of 7', () => {
    expect(isPrime(49)).toBe(false);
  });
  it('returns false if n is the square or cube of a prime', () => {
    let n = 11 * 11;
    expect(isPrime(n)).toBe(false);
    n = 13 * 13 * 13;
    expect(isPrime(n)).toBe(false);
  });
});

describe('generatePrimes', () => {
  it('returns an array with 2 and 3 when given 2', () => {
    expect(generatePrimes(2)).toEqual([2, 3]);
  });
  it('returns an empty array when given 0', () => {
    expect(generatePrimes(0)).toEqual([]);
  });
  it('returns an empty array when given a negative number', () => {
    expect(generatePrimes(-1)).toEqual([]);
  });
});
describe('generateTable', () => {
  it('returns Invalid input when given 0', () => {
    expect(generateTable(0)).toBe('Invalid input');
  });
  it('returns Invalid input when given  a negative number', () => {
    expect(generateTable(-5)).toBe('Invalid input');
  });
  it('returns the table when input is valid', () => {
    expect(generateTable(2)).toBe(
      `|        | 2\t | 3\t | \n|  2\t | 4\t | 6\t | \n|  3\t | 6\t | 9\t | \n`
    );
  });
});
