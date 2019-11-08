function sumFibs(num) {
  let prev = 1;
  let fib = 2;
  let fibs = [1, 1];
  while (fib < num) {
    fib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    if (fib <= num) {
      fibs.push(fib);
    }
  }
  let fibSum = 0;
  fibs.forEach(fib => {
    if (fib % 2 == 1) {
      fibSum += fib;
    }
  });
  return fibSum;
}
console.log(sumFibs(10));

// 22 mins    .......proud of this one

// actually there is a better solution that doesn't use an array.
// the array adds some unnecessary (space comlexity?)
