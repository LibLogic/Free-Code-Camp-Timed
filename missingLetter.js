function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    let startLetter = str[0].charCodeAt();
    console.log(str[i].charCodeAt(), startLetter + i)
    if(str[i].charCodeAt() !== startLetter + i) {
     return String.fromCharCode(startLetter + i);
    }
  }
}
console.log(
fearNotLetter("abce")
);

// 45 min first time
// 9 minutes 2nd time (accidentally deleted my code when I submitted on freeCode Camp)