## Problem

Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).

## Tests to Pass

- `expect(where([10, 20, 30, 40, 50], 35)).to.equal(3);`
- `expect(where([10, 20, 30, 40, 50], 30)).to.equal(2);`
