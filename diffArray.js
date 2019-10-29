function diffArray(arr1, arr2) {
  
  var newArr = [];

  for (let i = 0; i < arr1.length; i++){
    if(arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++){
      if(arr1.indexOf(arr2[i]) === -1) {
        newArr.push(arr2[i]);
      }
    }
   return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

// took me 59 minutes, was on the wrong track using .contain() instead of indexOf()
// Once I abandoned that idea it took about 15 minute, but that is a guess

// I did this again 2 days later using .includes() in 5 min 31 secs.......there was no .contains method in javascript


