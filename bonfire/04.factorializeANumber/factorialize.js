function factorialize(num) {
  var arrayOfNumbers = [];
  while (num > 0) {
    var previousNumber = num--;
    arrayOfNumbers.push(previousNumber);
  }
  return arrayOfNumbers.reduce(function(previousValue, currentValue){
    return previousValue * currentValue;
  });
}
