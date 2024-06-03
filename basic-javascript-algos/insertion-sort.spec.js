// jasmine-node ./insertion-sort.spec.js
const insertionSort = require('./insertion-sort').insertionSort;

describe("insertionSort", () => {
  it('should sort a given array', () => {
    expect(insertionSort(['my', 'name', 'is', 'bob'])).toEqual(['bob','is','my','name']);
    expect(insertionSort([5,4,9,3,10,6])).toEqual([ 3, 4, 5, 6, 9, 10 ]);
    expect(insertionSort('insertionsort'.split(''))).toEqual([ 'e', 'i', 'i', 'n', 'n', 'o', 'o', 'r', 'r', 's', 's', 't', 't' ]);
  });
});
