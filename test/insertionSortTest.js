const assert = require('chai').assert;
const arrayGen = require('./helpers/sort').arrayGen;
const InsertionSorter = require('../src/insertionSort');

describe('Insertion sort', () => {

  describe('Classic', () => {

    it('should work in-place on empty list (in-place)', () => {
      const array = [];
      InsertionSorter.classic(array);
      assert.deepEqual(array, []);
    });

    it('should work in-place on single element list (in-place)', () => {
      const array = [7];
      InsertionSorter.classic(array);
      assert.deepEqual(array, [7]);
    });

    it('should work many times on long lists (in-place)', () => {
      for (let i = 0; i < 50; i++) {
        const array = arrayGen(100);
        const testArray = array.slice().sort( (a, b) => a - b );

        InsertionSorter.classic(array);

        assert.deepEqual(array, testArray);
      }
    });
  });

  describe('Alternate', () => {

    it('should work on empty list (not in-place)', () => {
      const array = [];
      const sortedArray = InsertionSorter.alternate(array);
      assert.deepEqual(sortedArray, []);
      assert.notStrictEqual(array, sortedArray);
    });

    it('should work on single element list (not in-place)', () => {
      const array = [7];
      const sortedArray = InsertionSorter.alternate(array);
      assert.deepEqual(sortedArray, [7]);
      assert.notStrictEqual(array, sortedArray);
    });

    it('should work many times on long lists (not in-place)', () => {
      for (let i = 0; i < 50; i++) {
        const array = arrayGen(100);
        const sortedArray = InsertionSorter.alternate(array);

        assert.notStrictEqual(array, sortedArray);
        assert.notDeepEqual(array, sortedArray);

        array.sort( (a, b) => a - b );
        assert.deepEqual(array, sortedArray);
      }
    });
  });
});
