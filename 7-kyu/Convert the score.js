function scoreboard(string) {
  const num = {
    nil: 0,
    one: 1,
    two: 2,
    three:3,
    four:4,
    five:5,
    six:6,
    seven:7,
    eight:8,
    nine:9
  }
  return string.split(" ").splice(-2).map(item => num[item])
}

// https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/javascript