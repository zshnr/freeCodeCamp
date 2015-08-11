## Problem

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

## Tests to pass

- `assert.strictEqual(spinalCase('This Is Spinal Tap'), 'this-is-spinal-tap', 'should return spinal case from string with spaces');`
- `assert.strictEqual(spinalCase('thisIsSpinalTap'), 'this-is-spinal-tap', 'should return spinal case from string with camel case');`
- `assert.strictEqual(spinalCase('The_Andy_Griffith_Show'), 'the-andy-griffith-show', 'should return spinal case from string with snake case');`
- `assert.strictEqual(spinalCase('Teletubbies say Eh-oh'), 'teletubbies-say-eh-oh', 'should return spinal case from string with spaces and hyphens');`
