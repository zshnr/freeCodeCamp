function mutation(arr) {
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase().split('');
  var lettersMatch;
  secondWord.forEach(function(letter) {
    if (firstWord.indexOf(letter) != -1) {
      lettersMatch = true;
    } else {
      lettersMatch = false;
    }
  });
  return lettersMatch;
}
