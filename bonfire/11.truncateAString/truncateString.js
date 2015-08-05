function truncate(str, num) {
  if (str.length > num) {
    var truncStr = str.slice(0, num - 3);
    var newStr = truncStr + '...';
    return newStr;
  } else {
    return str;
  }
}
