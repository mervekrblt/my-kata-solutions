function digPow(n, p) {
  const arr = `${n}`.split("");
  const sum = arr
    .map((num, i) => Math.pow(Number(num), p + i))
    .reduce((a, b) => a + b, 0);
  return sum % n == 0 ? sum / n : -1;
}

// https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript
