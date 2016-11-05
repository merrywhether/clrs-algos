const assert = require('chai').assert;
const {randomArray} = require('./generators');

const LOOP_COUNT = 5;
const ARRAY_LENGTHS = [
  10,
  100,
  1000,
];

describe('Max Subarray', function() {
  this.timeout(0);

  const subarrays = [
    'brute',
    'divide',
  ];

  subarrays.forEach( function(type) {
    const subarrayFunc = require(`../src/maxSubarray/${type}MaxSubarray`);

    describe(`${type} maximum subarray simple`, function() {

      const tests = [
        // 1-item
        {initArray: [5], expectArray: [5], expectSum: 5, title: '1-item list returns item'},

        // 2-item
        {initArray: [5, 7], expectArray: [5, 7], expectSum: 12, title: '2-item all-positive list returns list'},
        {initArray: [5, -4], expectArray: [5], expectSum: 5, title: '2-item mixed list returns sole positive'},
        {initArray: [-5, -4], expectArray: [-4], expectSum: -4, title: '2-item all-negative list returns least negative'},

        // 3-item
        {initArray: [5, 6, 7], expectArray: [5, 6, 7], expectSum: 18, title: '3-item all-positive list returns list'},
        {initArray: [-5, 6, -7], expectArray: [6], expectSum: 6, title: '3-item mixed list returns sole positive'},
        {initArray: [5, -6, 7], expectArray: [7], expectSum: 7, title: '3-item mixed list returns biggest positive'},
        {initArray: [-5, -6, -7], expectArray: [-5], expectSum: -5, title: '3-item all-negative list returns least negative'},

        // 4-item
        {initArray: [8, -9, 7, 3], expectArray: [7, 3], expectSum: 10, title: '4-item mixed list returns winning pair not single highest'},
        {initArray: [8, -9, 4, 3], expectArray: [8], expectSum: 8, title: '4-item mixed list returns single highest which is highest'},
        {initArray: [3, 2, 4, -3], expectArray: [3, 2, 4], expectSum: 9, title: '4-item mixed list returns middle-spanning group'},

        // 5-item
        {initArray: [6, -9, 7, -8, 5], expectArray: [7], expectSum: 7, title: '5-item mixed list returns single highest which is middle'},
        {initArray: [-6, 9, 7, 8, -5], expectArray: [9, 7, 8], expectSum: 24, title: '5-item mixed list returns middle-spanning group'},
      ]

      tests.forEach( function({ initArray, expectArray, expectSum, title}) {
        it(title, function() {
          const data = subarrayFunc(initArray);
          assert.deepEqual(initArray.slice(data.startIdx, data.endIdx+1), expectArray);
          assert.strictEqual(data.sum, expectSum);
        });
      });

    });
  });

  describe('maximum subarray comparisons', function() {
    ARRAY_LENGTHS.forEach( function(length) {
      it(`maximum subarray of ${length}-item lists`, function() {
        const arrays = Array(LOOP_COUNT).fill(0).map( _ => randomArray(length) );

        const sums = [];

        subarrays.forEach( function(type) {
          const subarrayFunc = require(`../src/maxSubarray/${type}MaxSubarray`);
          const timerName = `\t\t${LOOP_COUNT} loops of ${type} max subarray`;
          sum = [];

          console.time(timerName);
          arrays.forEach( (array) => {
            sum.push(subarrayFunc(array).sum);
          });
          console.timeEnd(timerName);

          sums.push(sum);
        });

        sums.forEach( (sum, idx) => {
          const others = sums.slice().splice(idx, 1);
          others.forEach( (otherSum) => {
            assert.deepEqual(sum, otherSum);
          });
        });
      });
    });
  });

});
