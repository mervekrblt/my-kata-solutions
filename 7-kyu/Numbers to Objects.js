function numObj(s) {
  return s.reduce(
    (prev, curr) => [...prev, { [curr]: String.fromCharCode(curr) }],
    []
  );
}

// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/javascript