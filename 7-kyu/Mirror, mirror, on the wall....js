function mirror(data) {
  const first = data.slice().sort((a, b) => a - b)
  const second = data.slice().sort((a, b) => b - a).slice(1)
  return [...first, ...second]
}

//https://www.codewars.com/kata/5f55ecd770692e001484af7d/javascript