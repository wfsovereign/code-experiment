function alphabetPosition(text) {
  var length = text.length, result = [];
  for (var i = 0; i < length; i++) {
    var ascllIndex = text[i].toLowerCase().charCodeAt(0) - 96;
    if (ascllIndex > 0 && ascllIndex < 27) {
      result.push(ascllIndex);
    }
  }
  return result.join(' ');
}

var text = "The sunset sets at twelve o' clock.";
var t2 = "/7|@}d^5";
console.log(alphabetPosition(t2));
