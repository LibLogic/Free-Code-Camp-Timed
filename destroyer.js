function destroyer(arr) {
  for(let i = 0; i < arguments.length; i++) {
    let destroyer = arguments[i];
    while(arr.includes(destroyer)) {
      for( let j = 0; j < arr.length; j++) {
        if(arr[j] == destroyer) {
          arr.splice(j, 1);
        }
      }
    }
  }
  console.log(arr)
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

// time: 8:30