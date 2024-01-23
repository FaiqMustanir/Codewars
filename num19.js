function alienLanguage(str) {
    var words = str.split(" ");
    var alienWords = words.map(function(word) {
      var alienWord = word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase();
      return alienWord;
    });

    var result = alienWords.join(" ");
  
    return result;
  }

console.log(alienLanguage("My name is John")); 
console.log(alienLanguage("this is an example"));
console.log(alienLanguage("Hello World"));