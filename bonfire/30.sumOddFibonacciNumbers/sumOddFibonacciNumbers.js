function sumFibs(num) {
  var previousNumberInFibonacciSequence = 0;
  var currentNumberInFibonacciSequence = 1;
  var sumOfOddNumbersInFibonacciSequence = 0;

  while (currentNumberInFibonacciSequence <= num) {
    if (currentNumberInFibonacciSequence % 2 !== 0) {
      sumOfOddNumbersInFibonacciSequence += currentNumberInFibonacciSequence;
    }
    var nextNumberInFibonacciSequence = currentNumberInFibonacciSequence + previousNumberInFibonacciSequence;

    previousNumberInFibonacciSequence = currentNumberInFibonacciSequence;

    currentNumberInFibonacciSequence = nextNumberInFibonacciSequence;
  }
  return sumOfOddNumbersInFibonacciSequence;
}
