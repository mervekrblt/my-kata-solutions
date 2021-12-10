function broken(x) {
  return [...x].map(digit => digit == 1 ? 0 : 1).join("")
}