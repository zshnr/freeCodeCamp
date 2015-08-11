function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/(\s|_)/g, '-').toLowerCase();
  return str;
}
