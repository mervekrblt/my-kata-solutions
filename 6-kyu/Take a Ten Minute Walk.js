function isValidWalk(walk) {
  const obj = walk.reduce((obj, item) => {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  const val = Object.values(obj);
  return obj["n"] == obj["s"] && obj["w"] == obj["e"] && walk.length == 10
    ? true
    : false;
}

//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
