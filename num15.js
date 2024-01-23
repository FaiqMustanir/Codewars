function howManySmaller(arr, n) {
    // Use map to convert each element to a string with 2 decimal places
    var stringArr = arr.map(function (num) {
      return num.toFixed(2);
    });
  
    // Use filter to select numbers smaller than the specified value
    var smallerNumbers = stringArr.filter(function (strNum) {
      return parseFloat(strNum) < n;
    });
  
    // Return the count of smaller numbers
    return smallerNumbers.length;
  }
  
  // Examples
  console.log(howManySmaller([1.234, 1.235, 1.228], 1.24)); // Output: 2
  console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19)); // Output: 1
  console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212)); // Output: 2
  