function findLongestWord(str) {
  var strArray = str.split(' ');
  var longestWordLength = strArray.map(function(string){
    return string.length;
  }).sort().pop();
  return longestWordLength;
}
