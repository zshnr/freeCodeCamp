function sumPrimes(num) {
    var sum = 0;

    for (var i = 2; i <= num; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for(var iterator = 2; iterator < num; iterator++) {
        if (num % iterator === 0) {
            return false;
        }
    }
    return true;
}
