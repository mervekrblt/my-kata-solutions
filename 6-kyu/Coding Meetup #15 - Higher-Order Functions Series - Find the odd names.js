function findOddNames(list) {
    return list.filter(item => item.firstName.split("")
        .map(w => w.charCodeAt(0)).
        reduce((a, b) => a + b, 0) % 2 !== 0)
}

// https://www.codewars.com/kata/583a8bde28019d615a000035/javascript