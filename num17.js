function firstToLast(str, c) {
    var firstIndex = str.indexOf(c);
    var lastIndex = str.lastIndexOf(c);
  
    if (firstIndex === -1) {
      return -1;
    } else if (firstIndex === lastIndex) {
      return 0;
    } else {
      return lastIndex - firstIndex;
    }
  }

console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
console.log(firstToLast("ababc", "d"));