const findIndex = (arr, index) => {
  return arr.indexOf(index);
};

function findMissingLetter(array) {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr = array.map((letter) => letter.toLowerCase());
  const first = findIndex(letters, arr[0]);
  const last = findIndex(letters, arr[arr.length - 1]);
  const reference = letters.slice(first, last);
  const result = reference.filter((item, i) => item !== arr[i])[0];
  return array[0] === arr[0] ? result : result.toUpperCase();
}

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript
