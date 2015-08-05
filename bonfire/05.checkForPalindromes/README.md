## Problem

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

## Tests to Pass

- `expect(palindrome("eye")).to.be.a("boolean");`
- `assert.deepEqual(palindrome("eye"), true);`
- `assert.deepEqual(palindrome("race car"), true);`
- `assert.deepEqual(palindrome("not a palindrome"), false);`
- `assert.deepEqual(palindrome("A man, a plan, a canal. Panama"), true);`
- `assert.deepEqual(palindrome("never odd or even"), true);`
- `assert.deepEqual(palindrome("nope"), false);`
