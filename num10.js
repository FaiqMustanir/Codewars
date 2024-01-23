function pickIt(arr){
    var odd = [], even = [];
  
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]); // push even numbers to the even array
      } else {
        odd.push(arr[i]); // push odd numbers to the odd array
      }
    }
    
    return [odd, even];
  }