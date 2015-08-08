## Problem

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

## Tests to pass

- `expect(translate("california")).to.equal("aliforniacay");`
- `expect(translate("paragraphs")).to.equal("aragraphspay");`
- `expect(translate("glove")).to.equal("oveglay");`
- `expect(translate("algorithm")).to.equal("algorithmway");`
- `expect(translate("eight")).to.equal("eightway");`
