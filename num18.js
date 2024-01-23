function splitAndMerge(string, separator) {
    var words = string.split(" ");

    var modifiedWords = words.map(function(word) {
      return word.split("").join(separator);
    });

    var result = modifiedWords.join(" ");
  
    return result;
  }

console.log(splitAndMerge("My name is John", " "));
console.log(splitAndMerge("My name is John", "-"));
console.log(splitAndMerge("Hello World!", "."));
console.log(splitAndMerge("Hello World!", ","));