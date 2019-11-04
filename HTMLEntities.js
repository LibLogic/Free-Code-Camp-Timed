function convertHTML(str) {
  let newStr = "";
  let strArr = str.split("");
  strArr.forEach(letter => {
    switch (letter) {
      case "&":
        letter = "&amp;";
        break;
      case "<":
        letter = "&lt";
        break;
      case ">":
        letter = "&gt;";
        break;
      case "'":
        letter = "&apos;";
        break;
      case '"':
        letter = "&quote;";
        break;
      default:
        break;
    }
    newStr += letter;
  });
  return newStr;
}
console.log(convertHTML('Stuff in "quotation marks"'));

// had this one solved in 20 minutes, but spent 15 more trying to figure out why FCC won't accept the answer
// output looks identical to correct answers when viewed in dev tools.
