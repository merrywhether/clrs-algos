// n^2

function insertionSort (array, startIdx = 0, endIdx = array.length - 1) {
  for (let j = startIdx + 1; j <= endIdx; j++) {
    const key = array[j];
    let i = j - 1;

    while ( i >= startIdx && array[i] > key ) {
      array[i+1] = array[i];
      i--;
    }

    array[i+1] = key;
  }

  return array;
}

module.exports = insertionSort;
