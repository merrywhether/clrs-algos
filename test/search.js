const assert = require('chai').assert;
const {randomNumber, arrayWithoutTargetValue, arrayWithTargetValueAtPosition} = require('./generators');

const LOOP_COUNT = 10;
const ARRAY_LENGTH = 1000000;

describe('Searching', function() {
  this.timeout(0);

  const searches = [
    'linear',
    'binary'
  ];

  searches.forEach( function(type) {
    const searchFunc = require(`../src/search/${type}Search`);

    describe(`${type} search`, function() {

      it('search failure on empty list', function() {
        const idx = searchFunc([], 1);
        assert.strictEqual(idx, undefined);
      });

      it('search success on 1-item list', function() {
        const idx = searchFunc([7], 7);
        assert.strictEqual(idx, 0);
      });

      it('search success on 4-item list', function() {
        const idx = searchFunc([1, 3, 4, 5], 4);
        assert.strictEqual(idx, 2);
      });

      it('search failure on 4-item list', function() {
        const idx = searchFunc([1, 3, 4, 5], 7);
        assert.strictEqual(idx, undefined);
      });

      it(`search success on ${ARRAY_LENGTH}-item lists ${LOOP_COUNT} times`, function() {
        const timerName = `\t\t${LOOP_COUNT} loops of ${type} search success`;
        const arrays = Array(LOOP_COUNT).fill(0).map( _ => {
          const target = randomNumber();
          const position = randomNumber(ARRAY_LENGTH-1);
          const array = arrayWithTargetValueAtPosition(ARRAY_LENGTH, target, position);
          return { target, position, array };
        });

        console.time(timerName);
        arrays.forEach( ({target, position, array}) => {
          const idx = searchFunc(array, target);
          assert.strictEqual(idx, position);
        });
        console.timeEnd(timerName);
      });

      it(`search failure on ${ARRAY_LENGTH}-item lists ${LOOP_COUNT} times`, function() {
        const timerName = `\t\t${LOOP_COUNT} loops of ${type} search failure`;
        const arrays = Array(LOOP_COUNT).fill(0).map( _ => {
          const target = randomNumber();
          const array = arrayWithoutTargetValue(ARRAY_LENGTH, target);
          return { target, array };
        });

        console.time(timerName);
        arrays.forEach( ({ target, array }) => {
          const idx = searchFunc(array, target);
          assert.strictEqual(idx, undefined);
        });
        console.timeEnd(timerName);
      });

    });
  });
});
