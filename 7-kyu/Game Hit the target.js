const solution = mtrx => {
  const sign = mtrx.map(item => item.join("").replace(/\s/g,''))
  return sign.some(item => item == ">x")
}

// https://www.codewars.com/kata/5ffc226ce1666a002bf023d2/javascript