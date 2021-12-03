function warnTheSheep(queue) {
  //reverse array and find wolf index (findIndex) 
  //it equals to sheep position which is next to wolf
  const indexOfWolf = queue.reverse().findIndex(item => item == "wolf")
  return indexOfWolf == 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${indexOfWolf}! You are about to be eaten by a wolf!`
}