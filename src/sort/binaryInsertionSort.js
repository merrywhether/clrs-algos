// n lg n

function binaryInsertionSort (array) {
  for (let j = 1; j < array.length; j++) {
    const val = array[j];

    for (var startIdx = 0, endIdx = j-1; endIdx >= startIdx; ) {
      const insertIdx = Math.floor((startIdx + endIdx)/2);

      if (array[insertIdx] > val) {
        endIdx = insertIdx - 1;
      } else {
        startIdx = insertIdx + 1;
      }
    }

    // need constant insertion time to properly achieve n lg n
    if (startIdx !== j) {
      array.splice(j, 1);
      array.splice(startIdx, 0, val);
    }
  }

  return array;
}

module.exports = binaryInsertionSort;
