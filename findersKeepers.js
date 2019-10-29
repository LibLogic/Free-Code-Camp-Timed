function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (func(num)) {
      return num;
    }
  }
}
console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));

// 13 min
