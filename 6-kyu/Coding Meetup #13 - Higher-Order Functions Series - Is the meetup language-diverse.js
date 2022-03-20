function isLanguageDiverse(list) {
  const values = Object.values(
    list.reduce((acc, curr) => {
      acc[curr.language] = acc[curr.language] + 1 || 1;
      return acc;
    }, {})
  );
  return !values
    .map((num) => values.every((num2) => num2 / num <= 2))
    .includes(false);
}

// https://www.codewars.com/kata/58381907f8ac48ae070000de/javascript