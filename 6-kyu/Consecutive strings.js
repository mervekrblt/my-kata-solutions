function longestConsec(strarr, k) {
  const length = strarr.length;
  if (length == 0 || k > length || k <= 0) {
    return "";
  }
  const arr = strarr.map(
    (item, i, arr) => `${item}${arr.slice(i + 1, i + k).join("")}`
  );
  const max = Math.max(...arr.map((item) => item.length));
  return arr.find((item) => item.length == max);
}

// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript
