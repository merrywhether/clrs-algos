const assert = require('chai').assert;
const {randomNumber, arrayWithoutTargetValue, arrayWithTargetValueAtPosition} = require('../helpers/generators');
const linearSearch = require('../../src/search/linearSearch');

describe('Linear Search', () => {

  it('should work on empty list', () => {
    const idx = linearSearch([], 1);
    assert.strictEqual(idx, undefined);
  });

  it('should work on single element list', () => {
    const idx = linearSearch([7], 7);
    assert.strictEqual(idx, 0);
  });

  it('should return first index of duplicated item', () => {
    const idx = linearSearch([1, 4, 4, 5], 4);
    assert.strictEqual(idx, 1);
  });

  it('should find correct index many times on 1000-item lists', () => {
    console.time('\t\t50 loops');
    for (let i = 0; i < 50; i++) {
      const target = randomNumber();
      const position = randomNumber(999);
      const idx = linearSearch(arrayWithTargetValueAtPosition(1000, target, position), target);
      assert.strictEqual(idx, position);
    }
    console.timeEnd('\t\t50 loops');
  });

  it('should return undefined when not found in real list', () => {
    const idx = linearSearch([1, 4, 4, 5], 7);
    assert.strictEqual(idx, undefined);
  });

  it('should find undefined many times on 1000-item lists', () => {
    console.time('\t\t50 loops');
    for (let i = 0; i < 50; i++) {
      const target = randomNumber();
      const idx = linearSearch(arrayWithoutTargetValue(1000, target), target);
      assert.strictEqual(idx, undefined);
    }
    console.timeEnd('\t\t50 loops');
  });

});
