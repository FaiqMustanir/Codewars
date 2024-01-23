function grabDoll(dolls){
    var bag = [];
  
    for (var i = 0; i < dolls.length; i++) {
      if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
        bag.push(dolls[i]); // push "Hello Kitty" or "Barbie doll" to the bag
      } else {
        continue; // skip other strings
      }
  
      if (bag.length === 3) {
        break; // bag is full, exit the loop
      }
    }
  
    return bag;
  }
  