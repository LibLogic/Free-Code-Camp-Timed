function myReplace(str, before, after) {
  if (before.charCodeAt() >= 65 && before.charCodeAt() <= 90) {
    let letter = String.fromCharCode(after.charCodeAt() - 32);
    let rest = after.substring(1);
    after = `${letter}${rest}`;
  }
  return str.replace(before, after);
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);

// 90 mins
// misunderstood the nature of the problem, was overcomplicating it
// then I was trying to directly change element[0] of a string, but this wont work since strings are immutable
