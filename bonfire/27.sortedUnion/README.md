## Problem

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

## Tests to pass

- `assert.deepEqual(unite([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], 'should return the union of the given arrays');`
- `assert.deepEqual(unite([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]], 'should not flatten nested arrays');`
