const shuffleIt = (arr, ...args) => {
    for (const [a, b] of args) {
      [arr[a], arr[b]] = [arr[b], arr[a]]; // Using destructuring to swap elements
    }
    return arr;
  };
  
  // Examples
  console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2])); // [1, 3, 2, 4, 5]
  console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4])); // [1, 3, 2, 5, 4]
  console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3])); // [1, 3, 5, 2, 4]
  