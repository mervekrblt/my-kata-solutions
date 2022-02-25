const combine = (...objects) =>
  objects.reduce((result, object) => {
    console.log("o",objects)
    for (const key in object) {
      if (result[key]) {
        result[key] += object[key];
      } else result[key] = object[key]
      console.log(result)
    }

    return result;
  }, {});

// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/javascript