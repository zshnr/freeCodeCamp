## Problem

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

## Tests to pass

- `expect(sumAll([1, 4])).to.be.a('Number');`
- `expect(sumAll([1, 4])).to.equal(10);`
- `expect(sumAll([4, 1])).to.equal(10);`
- `expect(sumAll([5, 10])).to.equal(45);`
- `expect(sumAll([10, 5])).to.equal(45);`
