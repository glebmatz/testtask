const MAX_LIMIT = 100000;

const memoize = (fn) => {
    let cache = {};
    return (...args) => {
      let n = args[0];
      if (n in cache) {
        return cache[n];
      }
      else {
        let result = fn(n);
        cache[n] = result;
        return result;
      }
    }
}

export const findPrimes = memoize(() => {
    const IsPrimes = new Array(MAX_LIMIT + 1);
    const sqrt = Math.sqrt(MAX_LIMIT);
      const limit = MAX_LIMIT;
      for (let x = 1; x <= sqrt; x++)
        for (let y = 1; y <= sqrt; y++)
        {
          const x2 = x*x;
          const y2 = y*y;
          const n = 4*x2 + y2;
          if (n <= limit && (n%12 == 1 || n%12 == 5))
            IsPrimes[n] = true;

          n -= x2;
          if (n <= limit && n%12 == 7)
            IsPrimes[n] = true;

          n -= 2 * y2;
          if (x > y && n <= limit && n%12 == 11)
            IsPrimes[n] = true;

          IsPrimes[n] = false;
        }

      for (let n = 5; n <= sqrt; n += 2)
        if (IsPrimes[n])
        {
            const s = n*n;
          for (let k = s; k <= limit; k += s)
            IsPrimes[k] = false;
        }
    IsPrimes[2] = true;
    IsPrimes[3] = true;

    return IsPrimes;
})

export const getPrimesSum = (primes) => {
    return primes.reduce((acc, value) => acc + value, 0);
}

export const getPrimeNumbers = (primes, limit) => {
    return primes.reduce((acc, value, index) => {
        if (acc.length + 1 > limit) return acc;
        if (value) {
            acc.push(index);
        }
        return acc;
    }, [])
}

export const numberWithSpaces = (number) => {
    if (!number) return '';
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}