function reverseString(str) {
  var splitString = str.split("");
  var reversedArray = splitString.reverse();
  var reversedWord = reversedArray.join("");
  return reversedWord;
}
