function well(x){
  const good = x.reduce((prev, curr) => [...prev, ...curr], [])
    .map(item => typeof item === "string" ? item.toLowerCase(): item)
    .filter(item => item == "good").length
  return good == 0 ? "Fail!" : good >= 3 ? 'I smell a series!' : 'Publish!'
}

// https://www.codewars.com/kata/57f22b0f1b5432ff09001cab/javascript