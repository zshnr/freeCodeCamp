## Problem

The DNA strand is missing the pairing element. Match each character with the missing element and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

## Tests to pass

- `assert.deepEqual(pair("ATCGA"),[['A','T'],['T','A'],['C','G'],['G','C'],['A','T']], 'should return the dna pair');`
- `assert.deepEqual(pair("TTGAG"),[['T','A'],['T','A'],['G','C'],['A','T'],['G','C']], 'should return the dna pair');`
- `assert.deepEqual(pair("CTCTA"),[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']], 'should return the dna pair');`
