## Problem

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.

## Tests to Pass

- `expect(truncate('A-tisket a-tasket A green and yellow basket', 11)).to.eqls('A-tisket...');`
- `assert(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length) === 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is = length');`
- `assert.strictEqual(truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2), 'A-tisket a-tasket A green and yellow basket', 'should not truncate if string is < length');`
