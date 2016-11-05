const assert = require('chai').assert;
const {randomArray} = require('./generators');

const LOOP_COUNT = 5;
const ARRAY_LENGTHS = [
  // 10,
  // 100,
  1000,
  10000,
  // 100000,
];

describe('Sorting', function() {
  this.timeout(0);

  const sorts = [
    // 'selection', // very slow
    'insertion',
    // 'merge',
    // 'binaryInsertion',
    // 'insertionMerge',
    // 'bubble', // very slow
  ];

  sorts.forEach( function(type) {
    const sortFunc = require(`../src/sort/${type}Sort`);

    describe(`${type} sort`, function() {

      const tests = [
        // 0-item
        {array: [], expectArray: [], title: 'sort empty list'},

        // 1-item
        {array: [7], expectArray: [7], title: 'sort 1-item list'},

        // 2-item
        {array: [3, 7], expectArray: [3, 7], title: 'sort 2-item sorted list'},
        {array: [7, 3], expectArray: [3, 7], title: 'sort 2-item unsorted list'},

        // 4-item
        {array: [7, 4, 5, 1], expectArray: [1, 4, 5, 7], title: 'sort 4-item list'},
      ];

      tests.forEach( function({ array, expectArray, title }) {
        it(title, function() {
          sortFunc(array);
          assert.deepEqual(array, expectArray);
        });
      });

      ARRAY_LENGTHS.forEach( function(length) {
        it(`sort ${length}-item lists ${LOOP_COUNT} times`, function() {
          const timerName = `\t\t${LOOP_COUNT} loops of ${type} sort`;
          const tests = Array(LOOP_COUNT).fill(0).map( (_) => {
            array = randomArray(length);
            return {array, testArray: array.slice().sort( (a, b) => a - b )};
          });

          console.time(timerName);
          tests.forEach( ({ array, testArray }) => {
            sortFunc(array);
            assert.deepEqual(array, testArray);
          });
          console.timeEnd(timerName);
        });
      });

    });
  });
});
