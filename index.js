const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n === 3) return true;
};

module.exports = {
  isPrime,
};
