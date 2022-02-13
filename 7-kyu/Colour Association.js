function colourAssociation(array) {
  return array.reduce(
    (prev, current) => [...prev, { [current[0]]: current[1] }],
    []
  );
}

// https://www.codewars.com/kata/56d6b7e43e8186c228000637/javascript
