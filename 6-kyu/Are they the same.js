function comp(array1, array2) {
  if (array1 == null || array2 == null) {
    return false;
  }
  const arr2 = array2
    .map((num) => Math.pow(num, 0.5))
    .sort((a, b) => (a > b ? 1 : -1));
  const result = array1
    .sort((a, b) => (a > b ? 1 : -1))
    .map((num1, i) => arr2.includes(num1, i));
  return !result.includes(false);
}

// https://www.codewars.com/kata/550498447451fbbd7600041c/javascript