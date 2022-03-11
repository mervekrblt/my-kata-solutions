function toCamelCase(str) {
  const reg = /[-._]/;
  return str
    .split(reg)
    .map((word, i) => {
      return i == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}
// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript
