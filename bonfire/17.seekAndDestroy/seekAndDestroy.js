function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  arr = args.shift();
  arr = arr.filter(function(element){
    return args.indexOf(element) === -1;
  });
  return arr;
}
