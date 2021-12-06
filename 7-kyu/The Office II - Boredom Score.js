function boredom(staff) {
  const departments = {
    "accounts": 1,
    "finance": 2,
    "canteen": 10,
    "regulation": 3,
    "trading": 6,
    "change": 6,
    "IS": 8,
    "retail": 5,
    "cleaning": 4,
    "pissing about": 25
  }

  const values = Object.values(staff)

  const total = values.map(value => departments[value])
    .reduce((a, b) => a + b, 0)

  return total <= 80 ? 'kill me now' : total >= 100 ? 'party time!!' : 'i can handle this'
}