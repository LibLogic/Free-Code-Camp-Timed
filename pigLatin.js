function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  vowels.forEach(vowel => {
    let vowelFound = str.indexOf(vowel) !== -1 ? true : false;
  });

  if (vowels.indexOf(str[0]) !== -1) {
    return str + "way";
  } else {
    let consanantCluster = [];
    if (vowelFound === true) {
      for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) === -1) {
          consanantCluster.push(str[i]);
        } else {
          consanantCluster = consanantCluster.join("");
          str = str.slice(i);
          break;
        }
      }
    }
    return str + consanantCluster + "ay";
  }
}

console.log(translatePigLatin("away"));

// 45 min
