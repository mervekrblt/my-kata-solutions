function oddOnesOut(nums) {
  const newArr = []
  nums.map(item => {
    const times = nums.filter(num => num == item).length
    if(times % 2 == 0) {
      newArr.push(item)
    }
  })
  return newArr
}

// https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/javascript