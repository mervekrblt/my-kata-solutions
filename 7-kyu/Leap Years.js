// I know that my solution for this kata is not the best. To be honest, it looks like a sh*t, but I am trying to improve myself lol

function isLeapYear(year) {
  // 1000 4,100 ok - 400 x
  if (year % 4 == 0 && year % 100 == 0 && year % 400 !== 0) {
    return false
    // 2000
  } else if (year % 4 == 0 && year % 100 == 0) {
    return true
    // 1984
  } else if (year % 4 == 0 && year % 100 != 0 && year % 400 != 0) {
    return true
  } else return false
}

// kata link: https://www.codewars.com/kata/526c7363236867513f0005ca/javascript