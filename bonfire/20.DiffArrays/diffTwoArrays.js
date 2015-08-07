function diff(arr1, arr2) {
  var newArr = [];
  var newArr2 = [];
  var concatArr = [];
  newArr = arr2.filter(function(element){
    return arr1.indexOf(element) === -1;
  });
  newArr2 = arr1.filter(function(element){
    return arr2.indexOf(element) === -1;
  });
  concatArr = newArr.concat(newArr2);
  return concatArr;
}
