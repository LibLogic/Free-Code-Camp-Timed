function sumAll(arr) {
  arr.sort((a, b) => {
    return a>b?1:-1;
  })
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

// took 5 minutes 30 seconds