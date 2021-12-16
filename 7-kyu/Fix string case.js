function solve(s) {
  const uppers = [...s].map(letter => letter == letter.toUpperCase() ? 1 : 0)
    .filter(num => num == 1).length
  const lowers = s.length - uppers
  return uppers > lowers ? s.toUpperCase() : s.toLowerCase()
}

// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/javascript