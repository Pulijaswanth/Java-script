function areCoprime(a, b) {
    for (let i = 2; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) {
        return false;
      }
    }
    return true;
  }
  function printCoprimesInRange(start, end) {
    let coprimes = [];
    for (let i = start; i <= end; i++) {
      let isCoprime = true;
      for (let j = start; j <= end; j++) {
        if (i !== j && !areCoprime(i, j)) {
          isCoprime = false;
          break;
        }
      }
      if (isCoprime) {
        coprimes.push(i);
      }
    }
    console.log("Co-primes within the range " + start + " to " + end + ":");
    console.log(coprimes);
  }
  printCoprimesInRange(1, 20);
  