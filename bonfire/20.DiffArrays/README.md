## Problem

Compare two arrays and return a new array with any items not found in both of the original arrays.

## Tests to pass

- `expect(diff([1, 2, 3, 5], [1, 2, 3, 4, 5])).to.be.a('array');`
- `assert.deepEqual(diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['pink wool'], 'arrays with only one difference');`
- `assert.includeMembers(diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']), ['diorite', 'pink wool'], 'arrays with more than one difference');`
- `assert.deepEqual(diff(['andesite', 'grass', 'dirt', 'dead shrub'], ['andesite', 'grass', 'dirt', 'dead shrub']), [], 'arrays with no difference');`
- `assert.deepEqual(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]), [4], 'arrays with numbers');`
- `assert.includeMembers(diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]), ['piglet', 4], 'arrays with numbers and strings');`
- `assert.deepEqual(diff([], ['snuffleupagus', 'cookie monster', 'elmo']), ['snuffleupagus', 'cookie monster', 'elmo'], 'empty array');`
