function sumAll(arr) {
  var getMaxNumFromArray = function(arr) {
    return Math.max.apply(null, arr);
  };

  var getMinNumFromArray = function(arr){
    return Math.min.apply(null, arr);
  };

  var oneLessThanMax = getMaxNumFromArray(arr) - 1;
  var oneMoreThanMin = getMinNumFromArray(arr) + 1;

  for(i = oneLessThanMax; i >= oneMoreThanMin; i--){
    arr.push(i);
  }

  var sum = arr.reduce(function(currentValue, previousValue){
    return currentValue + previousValue;
  });

  return(sum);
}
