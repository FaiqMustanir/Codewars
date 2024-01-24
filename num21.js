function fiveLine(s) {
    s = s.trim(); // Remove whitespace from both ends of the string
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
  }
  
  // Examples
  console.log(fiveLine("  a"));
  console.log(fiveLine("  xy "));
  