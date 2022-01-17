function removeRotten(bagOfFruits){
  return bagOfFruits ? bagOfFruits.map(fruit => {
    if(fruit.includes("rotten")){
      return fruit.split("rotten")[1].toLowerCase()
    }
    return fruit
  }) : []
}

// https://www.codewars.com/kata/557af4c6169ac832300000ba/javascript