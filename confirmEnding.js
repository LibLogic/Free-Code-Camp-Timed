function confirmEnding(str, target) {
  let strEnd = target.length;
  if (str.substring(str.length - strEnd) == target) {
    return true;
  }
  return false;
}

console.log(confirmEnding("Bastian", "x"));

// 10 mins
