## Problem

Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

## Tests to Pass

- `expect(titleCase("I'm a little tea pot")).to.be.a('String');`
- `expect(titleCase("I'm a little tea pot")).to.equal("I'm A Little Tea Pot");`
- `expect(titleCase("sHoRt AnD sToUt")).to.equal("Short And Stout");`
- `expect(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).to.equal("Here Is My Handle Here Is My Spout");`
