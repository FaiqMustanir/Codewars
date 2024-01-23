function cutIt(arr) {
    // Find the shortest string length
    var minLength = arr.reduce(function (min, str) {
      return Math.min(min, str.length);
    }, Infinity);
  
    // Use map to cut each string to the shortest length
    var result = arr.map(function (str) {
      return str.slice(0, minLength);
    });
  
    return result;
  }
  
  // Examples
  console.log(cutIt(["ab", "cde", "fgh"])); // Output: ["ab", "cd", "fg"]
  console.log(cutIt(["abc", "defgh", "ijklmn"])); // Output: ["abc", "def", "ijk"]
  console.log(cutIt(["codewars", "javascript", "java"])); // Output: ["code", "java", "java"]
  