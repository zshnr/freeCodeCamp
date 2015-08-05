## Problem

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.

## Tests to Pass

- `assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']], 'should return chunked arrays');`
- `assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]], 'should return chunked arrays');`
- `assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]], 'should return chunked arrays');`
- `assert.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]], 'should return the last chunk as remaining elements');`
