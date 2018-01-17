var inputString = process.argv.slice(2);
var noSpaces = inputString.join("");

var countLetters = function(noSpaces) {
  var letterObject = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i] in letterObject) {
      letterObject[noSpaces[i]] += 1;
    } else {
      letterObject[noSpaces[i]] = 1;
    }
  }
  return letterObject;
};

console.log(countLetters(noSpaces));
