function spinalCase(str) {
  str = str
    .replace(/_/g, " ")
    .split(/(?=[A-Z]|\s)/)
    .join(" ")
    .replace(/\s+/g, "-")
    .toLowerCase();
  return str;
}

console.log(spinalCase("AllThe-small Things"));

// took over an hour..needed to brush up on regex to find a solution
