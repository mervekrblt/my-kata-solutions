function chooseShows(showList) {
  
  const showsByTime = showList.sort((a, b) => a.time - b.time || a.price - b.price);
  
  let list = [];
  let cost = 0;
  let time = 0;
  
  for (let show of showsByTime) {
    if (show.time >= time) {
      list.push(show.name);
      cost += show.price;
      time = show.time + show.length + 0.5;
    }
  }
  
  return [ list.length ? list : [ "No shows to see!" ], cost ];
  
}

// https://www.codewars.com/kata/5b6d9e478adeae4d62000064/javascript