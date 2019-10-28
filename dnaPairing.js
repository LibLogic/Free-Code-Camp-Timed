function pairElement(str) {
  let pairs = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    switch (letter) {
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;      
      case "A":
        pairs.push(["A", "T"]);
        break;      
      case "T":
        pairs.push(["T", "A"]);
        break;      
    }
  }
  console.log(pairs);
  // return str;
}

pairElement("GCG");

// 10 mins