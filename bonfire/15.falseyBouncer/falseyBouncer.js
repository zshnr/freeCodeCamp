function bouncer(arr) {
  var newArr = arr.filter(function(element) {
    return Boolean(element).valueOf() === true;
  });
  return newArr;
}
