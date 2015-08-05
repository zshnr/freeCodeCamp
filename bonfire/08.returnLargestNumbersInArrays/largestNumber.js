function largestOfFour(arr) {
  var sorted = [];
  var compareNumbers = function(a,b) {
    return a - b;
  };
  for (index = 0; index <= arr.length - 1; index++) {
    sorted.push(arr[index].sort(compareNumbers));
  }
  var largestNumbers = sorted.map(function(arrays){
    return arrays.pop();
  });
  return largestNumbers;
}
