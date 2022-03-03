function elementsSum(arr, d) {
  let index = arr.length;
  return arr
    .map((sub, i) => {
      index--;
      return typeof sub[index] == "number" ? sub[index] : d ? d : 0;
    })
    .reduce((a, b) => a + b, 0);
}

// https://www.codewars.com/kata/5b5e0ef007a26632c400002a/javascript
