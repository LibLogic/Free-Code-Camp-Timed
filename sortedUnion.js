function uniteUnique(arr) {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    let subArr = arguments[i];
    for (let j = 0; j < subArr.length; j++) {
      if (newArr.indexOf(subArr[j]) === -1) {
        newArr.push(subArr[j]);
      }
    }
  }
  return newArr;
}

console.log(
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);

// 27 min


console.log(
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
);
