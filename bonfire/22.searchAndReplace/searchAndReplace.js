function replace(str, before, after) {
  var sentenceArray = str.split(' ');
  if (before.charAt(0) === before.charAt(0).toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.substring(1).toLowerCase();
  } else {
    after = after;
  }
  var splicedSentenceArray = sentenceArray.splice(sentenceArray.indexOf(before), 1, after);
  var newSentence = sentenceArray.join(' ');
  return newSentence;
}
