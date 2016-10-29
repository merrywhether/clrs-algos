// lg n

function binarySearch (array, target) {
  let startIdx = 0, endIdx = array.length - 1;

  while(endIdx >= startIdx) {
    const midIdx = Math.floor((startIdx + endIdx)/2);

    if (array[midIdx] === target) {
      return midIdx;
    } else if (array[midIdx] > target) {
      endIdx = midIdx - 1;
    } else {
      startIdx = midIdx + 1;
    }
  }

  return undefined;
}

module.exports = binarySearch;
