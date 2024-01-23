function padIt(str, n) {
    let i = 1;
    
    while (i <= n) {
      if (i % 2 === 1) {
        str = '*' + str; // add '*' to the left side
      } else {
        str = str + '*'; // add '*' to the right side
      }
      
      i++;
    }
    
    return str;
  }