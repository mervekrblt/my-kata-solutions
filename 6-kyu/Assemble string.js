function assembleString(array) {
  if (array.length == 0) {
    return "";
  }
  const newArr = [];
  for (let x = 0; x < array[0].length; x++) {
    let str = "";
    for (let i = 0; i < array.length; i++) {
      str += array[i][x];
    }
    newArr.push(str);
  }
  const x = newArr
    .map((item) => [...new Set(item)].join("").replace("*", ""))
    .map((item) => (item == "" ? "#" : item))
    .join("");
  return x;
}

// This is not the best solution

// https://www.codewars.com/kata/6210fb7aabf047000f3a3ad6/javascript
