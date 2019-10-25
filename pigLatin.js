function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let vowelFound = false;
  vowels.forEach(vowel => {
    if (str.indexOf(vowel) !== -1) {
      vowelFound = true;
    }
  });

  if (vowels.indexOf(str[0]) !== -1) {
    return str + "way";
  } else if (!vowelFound === true) {
    return str + "ay";
  } else {
    return consCluster();
  }

  function consCluster() {
    let consanantCluster = [];
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) === -1) {
        consanantCluster.push(str[i]);
      } else {
        consanantCluster = consanantCluster.join("");
        str = str.slice(i);
        break;
      }
    }
    return str + consanantCluster + "ay";
  }
}

console.log(translatePigLatin("chicken"));

// 45 min
