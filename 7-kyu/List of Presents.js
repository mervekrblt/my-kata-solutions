function howManyGifts(maxBudget, gifts){
  gifts = gifts.sort((a, b) => a - b);
  let sum = 0;
  let i = 0;
  while (maxBudget >= sum) {
    sum += gifts[i];
    i++;
  }
  return i - 1;
}

// https://www.codewars.com/kata/5a84d485742ba347b90006b7/javascript