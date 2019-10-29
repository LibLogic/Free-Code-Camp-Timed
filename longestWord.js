function findLongestWordLength(str) {
  str = str.split(" ");
  str.sort((a, b) => {
    return a.length < b.length ? 1 : -1;
  });
  return str[0].length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// 5 mins
