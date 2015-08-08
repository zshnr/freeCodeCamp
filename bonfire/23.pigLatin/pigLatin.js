function translate(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetterOfStr = str.charAt(0).toLowerCase();
  var secondLetterOfStr = str.charAt(1);
  var firstLetterNotVowel = vowels.indexOf(firstLetterOfStr) === -1;
  var secondLetterNotVowel = vowels.indexOf(secondLetterOfStr) === -1;
  var secondLetterIsVowel = vowels.indexOf(secondLetterOfStr) !== -1;
  var pigStr = '';

  if (firstLetterNotVowel && secondLetterIsVowel) {
    pigStr = str.substring(1, str.length) + firstLetterOfStr + 'ay';
  } else if (firstLetterNotVowel && secondLetterNotVowel) {
    pigStr = str.substring(2, str.length) + firstLetterOfStr + secondLetterOfStr + 'ay';
  } else {
    pigStr = str + 'way';
  }

  return pigStr;
}
