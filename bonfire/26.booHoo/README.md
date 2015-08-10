## Problem

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

## Tests to pass

- `assert.strictEqual(boo(true), true);`
- `assert.strictEqual(boo(false), true);`
- `assert.strictEqual(boo([1, 2, 3]), false);`
- `assert.strictEqual(boo([].slice), false);`
- `assert.strictEqual(boo({ 'a': 1 }), false);`
- `assert.strictEqual(boo(1), false);`
- `assert.strictEqual(boo(NaN), false);`
- `assert.strictEqual(boo('a'), false);`
