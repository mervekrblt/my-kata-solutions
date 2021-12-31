function lastSurvivor(letters, coords) {
  let arr = letters.split("")
  coords.forEach(item => {
    arr.splice(item, 1)
  })
  return String(arr)
}

// https://www.codewars.com/kata/609eee71109f860006c377d1/javascript