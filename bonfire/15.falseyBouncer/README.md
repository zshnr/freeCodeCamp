## Problem

Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.

## Tests to Pass

- `assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9], 'should remove falsey values');`
- `assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'], 'should return full array if no falsey elements');`
- `assert.deepEqual(bouncer([false, null, 0]), [], 'should return empty array if all elements are falsey');`
