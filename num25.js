function sortIt(arr) {
    const countMap = new Map();
  
    arr.forEach(num => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });
  
    return arr.slice().sort((a, b) => {
      if (countMap.get(a) !== countMap.get(b)) {
        return countMap.get(a) - countMap.get(b);
      } else {
        return b - a;
      }
    });
  }
  
  // Example
  console.log(sortIt([1, 1, 1, 2, 2, 3]));
  // Output: [3, 2, 2, 1, 1, 1]
  console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));
  // Output: [3, 3, 3, 2, 2, 2, 1, 1, 1]
  console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
  // Output: [3, 2, 1, 6, 6, 5, 5, 4, 4]
  