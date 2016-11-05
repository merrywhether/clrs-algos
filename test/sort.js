const assert = require('chai').assert;
const {randomArray} = require('./generators');

const LOOP_COUNT = 5;
const ARRAY_LENGTHS = [1000, 10000, 100000];
// const ARRAY_LENGTHS = [10];

describe('Sorting', function() {
  this.timeout(0);

  const sorts = [
    // 'selection', // very slow
    'insertion'
    // 'merge',
    // 'binaryInsertion',
    // 'insertionMerge'
  ];

  sorts.forEach( function(type) {
    const sortFunc = require(`../src/sort/${type}Sort`);

    describe(`${type} sort`, function() {

      it('sort empty list', function() {
        const array = [];
        sortFunc(array);
        assert.deepEqual(array, []);
      });

      it('sort 1-item list', function() {
        const array = [7];
        sortFunc(array);
        assert.deepEqual(array, [7]);
      });

      it('sort 2-item sorted list', function() {
        const array = [3, 7];
        sortFunc(array);
        assert.deepEqual(array, [3, 7]);
      });

      it('sort 2-item unsorted list', function() {
        const array = [7, 3];
        sortFunc(array);
        assert.deepEqual(array, [3, 7]);
      });

      it('sort 4-item list', function() {
        const array = [7, 4, 5, 1];
        sortFunc(array);
        assert.deepEqual(array, [1, 4, 5, 7]);
      });

      ARRAY_LENGTHS.forEach( function(length) {
        it(`sort ${length}-item lists ${LOOP_COUNT} times`, function() {
          const timerName = `\t\t${LOOP_COUNT} loops of ${type} sort`;
          const arrays = Array(LOOP_COUNT).fill(0).map( _ => randomArray(length) );

          console.time(timerName);
          arrays.forEach( (array) => {
            const testArray = array.slice().sort( (a, b) => a - b );
            sortFunc(array);
            assert.deepEqual(array, testArray);
          });
          console.timeEnd(timerName);
        });
      });

    });
  });
});
