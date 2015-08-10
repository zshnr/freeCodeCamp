function fearNotLetter(str) {
  var charCodeArray = [];
  var indexOfLastStrElement = str.length - 1;
  var missingNumber;
  var missingLetter;

  for (i = 0; i <= indexOfLastStrElement; i++){
    charCodeArray.push(str.charCodeAt(i));
  }

  var indexOfSecondLastArrayElement = charCodeArray.length - 2;

  for (i = 0; i <= indexOfSecondLastArrayElement; i++) {
    if (charCodeArray[i] + 1 !== charCodeArray[i+1]) {
      missingNumber = charCodeArray[i] + 1;
      missingLetter = String.fromCharCode(missingNumber);
    }
  }
  return missingLetter;
}
