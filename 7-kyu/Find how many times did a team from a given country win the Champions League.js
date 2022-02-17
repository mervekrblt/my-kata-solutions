function countWins(winnerList, country) {
  return winnerList.filter(item => item.country === country).length
}

// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/javascript