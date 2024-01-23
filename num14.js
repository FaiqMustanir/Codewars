function colorOf(r, g, b) {
    // Convert each color component to a two-character hex string
    var redHex = r.toString(16).padStart(2, '0');
    var greenHex = g.toString(16).padStart(2, '0');
    var blueHex = b.toString(16).padStart(2, '0');
  
    // Combine the hex strings into a web color code
    var colorCode = "#" + redHex + greenHex + blueHex;
  
    return colorCode;
  }
  
  // Examples
  console.log(colorOf(255, 0, 0));   // Output: "#ff0000"
  console.log(colorOf(0, 111, 0));   // Output: "#006f00"
  console.log(colorOf(1, 2, 3));      // Output: "#010203"
  