## Problem

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a 'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in 'Alien'.

## Tests to Pass

- `expect(mutation(['hello', 'hey'])).to.be.false;`
- `expect(mutation(['hello', 'Hello'])).to.be.true;`
- `expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).to.be.true;`
- `expect(mutation(['Mary', 'Army'])).to.be.true;`
- `expect(mutation(['Mary', 'Aarmy'])).to.be.true;`
- `expect(mutation(['Alien', 'line'])).to.be.true;`
- `expect(mutation(['floor', 'for'])).to.be.true;`
