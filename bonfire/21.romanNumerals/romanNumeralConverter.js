function convert(num) {
  var numInRoman = '';

  var romanNumerals = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX', 5: 'V', 4: 'IV', 1: 'I'};

  var romanNumeralKeys = Object.keys(romanNumerals).reverse();

  for (i = 0; i <= romanNumeralKeys.length - 1; i++) {
    while(num >= parseInt(romanNumeralKeys[i], 10)) {
      numInRoman += romanNumerals[romanNumeralKeys[i]];
      num -= parseInt(romanNumeralKeys[i], 10);
    }
  }
  return numInRoman;
}
