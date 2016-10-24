const assert = require('chai').assert;
const {randomArray} = require('../helpers/generators');
const insertionSort = require('../../src/sort/insertionSort');

describe('Insertion sort', () => {

  it('should work in-place on empty list', () => {
    const array = [];
    insertionSort(array);
    assert.deepEqual(array, []);
  });

  it('should work in-place on single element list', () => {
    const array = [7];
    insertionSort(array);
    assert.deepEqual(array, [7]);
  });

  it('should work many times on 1000-item lists', () => {
    console.time('\t\t50 loops');
    for (let i = 0; i < 50; i++) {
      const array = randomArray(1000);
      const testArray = array.slice().sort( (a, b) => a - b );

      insertionSort(array);

      assert.deepEqual(array, testArray);
    }
    console.timeEnd('\t\t50 loops');
  });
});
