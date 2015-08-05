## Problem

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

## Tests to Pass

- `assert.strictEqual(repeat('*', 3), '***', 'should repeat a string n times');`
- `assert.strictEqual(repeat('abc', 3), 'abcabcabc', 'should repeat a string n times');`
- `assert.strictEqual(repeat('abc', -2), '', 'should return an empty string for negative numbers');`
