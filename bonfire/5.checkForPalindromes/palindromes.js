function palindrome(str) {
  var newStr = str.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  return newStr == newStr.split('').reverse().join('');
}

palindrome("eye");
