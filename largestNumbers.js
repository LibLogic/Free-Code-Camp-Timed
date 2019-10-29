function largestOfFour(arr) {
  let newArr = [];
  arr.forEach(elem => {
    let num = 0 - Infinity;
    elem.forEach(number => {
      if (number > num) {
        num = number;
      }
    });
    newArr.push(num);
  });
  return newArr;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ])
);

// 15 mins
// Had to google about Infinity
