## Problem

Make a function that looks through a list (first argument) and returns an array of all objects that have equivalent property values (second argument).

## Tests to Pass

- `assert.deepEqual(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }), [{ first: 'Tybalt', last: 'Capulet' }], 'should return an array of objects');`
- `assert.deepEqual(where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }), [{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], 'should return with multiples');`
