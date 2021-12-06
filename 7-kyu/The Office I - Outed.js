function outed(meet, boss){
  const scores = Object.keys(meet).map(key => {
    if(key == boss) { // if laura == laure
      return meet[key]*2  // double laure' s score
    }
    return meet[key]  // laura != jim then return actual key's value
  })
  
  const totalScore = scores.reduce((a, b) => a + b, 0) / 11 //total score of scores/number of people
  
  return totalScore <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}