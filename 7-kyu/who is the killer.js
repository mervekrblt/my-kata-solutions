function killer(suspect, dead) {
  const people = []
  Object.entries(suspect).forEach(([key, value]) => {
    const arr = [key, ...value]
    people.push(arr)
  })
  return people.find(item => dead.every(i => item.includes(i)))[0]
}