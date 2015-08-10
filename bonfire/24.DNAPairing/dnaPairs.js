function pair(str) {
  var dna = {A: 'T', T: 'A', C: 'G', G: 'C'};
  var basePairs = [];

  for (i = 0; i <= str.length - 1; i++) {
    var basePair = [];
    basePair.push(str[i]);
    basePair.push(dna[str[i]]);
    basePairs.push(basePair);
  }
 return basePairs;
}
