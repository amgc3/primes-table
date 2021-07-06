const isPrime = (n) => {
  if (n <= 1) return false;

  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;
  // all primes are of the form
  // 6k - 1 or 6k + 1 where k is a pos integer
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};

const generatePrimes = (n) => {
  const primes = [];
  if (n < 1) return [];
  let i = 2;
  while (primes.length < n) {
    if (isPrime(i)) primes.push(i);
    i++;
  }
  return primes;
};


module.exports = {
  isPrime,
  generatePrimes,
};
