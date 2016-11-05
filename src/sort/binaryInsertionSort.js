// n lg n

function binaryInsertionSort (array, startIdx = 0, endIdx = array.length - 1) {
  for (let j = startIdx + 1; j <= endIdx; j++) {
    const val = array[j];

    for (var searchStartIdx = startIdx, searchEndIdx = j-1; searchEndIdx >= searchStartIdx; ) {
      const insertIdx = Math.floor((searchStartIdx + searchEndIdx)/2);

      if (array[insertIdx] > val) {
        searchEndIdx = insertIdx - 1;
      } else {
        searchStartIdx = insertIdx + 1;
      }
    }

    // need constant insertion time to properly achieve n lg n
    if (searchStartIdx !== j) {
      array.splice(j, 1);
      array.splice(searchStartIdx, 0, val);
    }
  }

  return array;
}

module.exports = binaryInsertionSort;
