## Problem

Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.

## Tests to pass

- `assert.strictEqual(convert('Dolce & Gabbana'), 'Dolce &amp; Gabbana', 'should escape characters');`
- `assert.strictEqual(convert('Hamburgers < Pizza < Tacos'), 'Hamburgers &lt; Pizza &lt; Tacos', 'should escape characters');`
- `assert.strictEqual(convert('Sixty > twelve'), 'Sixty &gt; twelve', 'should escape characters');`
- `assert.strictEqual(convert('Stuff in "quotation marks"'), 'Stuff in &quot;quotation marks&quot;', 'should escape characters');`
- `assert.strictEqual(convert("Shindler's List"), 'Shindler&apos;s List', 'should escape characters');`
- `assert.strictEqual(convert('<>'), '&lt;&gt;', 'should escape characters');`
- `assert.strictEqual(convert('abc'), 'abc', 'should handle strings with nothing to escape');`
