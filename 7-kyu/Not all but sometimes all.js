function remove(str, what) {
  return str.split("").map(w => (what[w] > 0 ? what[w]-- && (w="") : w)).join("")
}

// https://www.codewars.com/kata/564ab935de55a747d7000040/train/javascript