## Problem

Return the remaining elements of an array after chopping off n elements from the head.

## Tests to Pass

- `assert.deepEqual(slasher([1, 2, 3], 2), [3], 'should drop the first two elements');`
- `assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'should return all elements when n < 1');`
- `assert.deepEqual(slasher([1, 2, 3], 9), [], 'should return an empty array when n >= array.length');`
