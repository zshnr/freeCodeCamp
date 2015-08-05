function titleCase(str) {
  return str.split(' ').map(function(eachString){
    return eachString.charAt(0).toUpperCase() + eachString.substring(1).toLowerCase();
  }).join(' ');
}
