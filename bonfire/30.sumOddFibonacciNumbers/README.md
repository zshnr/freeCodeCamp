## Problem

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

## Tests to pass

- `expect(sumFibs(1)).to.be.a('number');`
- `expect(sumFibs(1000)).to.equal(1785);`
- `expect(sumFibs(4000000)).to.equal(4613732);`
- `expect(sumFibs(4)).to.equal(5);`
- `expect(sumFibs(75024)).to.equal(60696);`
- `expect(sumFibs(75025)).to.equal(135721);`
