function add(x) {
  return function addY(y) {
    return x + y
  }
}