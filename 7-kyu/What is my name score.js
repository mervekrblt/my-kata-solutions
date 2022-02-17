function nameScore(name){
  const arr = name.toUpperCase().split("")
  let score=0
   for (let x in alpha) {
    for (let i = 0; i < arr.length; i++) {
      if (x.indexOf(arr[i]) !== -1) {
        score += alpha[x];
      }
    }
  }
  return {[name]: score}
}

// https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/javascript