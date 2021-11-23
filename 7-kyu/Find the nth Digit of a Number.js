var findDigit = function(num, nth){
  const number = num.toString()
  let digit
  
  if(num < 0) {
    digit = number.length - 1
  }else {
    digit = number.length
  }
  
  if(nth <= 0) {
    return -1
  } else if( digit == 0 || digit < nth ){
    return 0
  } else {
    return Number(number.split("").reverse()[nth-1])
  }
}