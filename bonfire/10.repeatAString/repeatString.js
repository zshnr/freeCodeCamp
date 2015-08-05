function repeat(str, num) {
  var newString = '';
  if (num == 1) {
    return str;
  } else if (num > 1) {
    for (i = 1; i <= num; i++) {
      newString += str;
    }
    return newString;
  } else if (num <= 0) {
    return '';
  }
}
