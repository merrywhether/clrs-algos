// Merge sort with insertion sort once arrays are small

// nk + n lg n/k

const insertionSort = require('./insertionSort');

function merge (array, startIdx, midIdx, endIdx) {
  const leftArray = array.slice(startIdx, midIdx+1).concat(Infinity),
        rightArray = array.slice(midIdx+1, endIdx+1).concat(Infinity);

  for (let i = startIdx, leftPtr = 0, rightPtr = 0; i <= endIdx; i++) {
    if (leftArray[leftPtr] <= rightArray[rightPtr]) {
      array[i] = leftArray[leftPtr++];
    } else {
      array[i] = rightArray[rightPtr++];
    }
  }
}

function insertionMergeSort (array, startIdx = 0, endIdx = array.length - 1, mergeLimit = Math.floor(Math.sqrt(array.length))) {
  if (endIdx <= startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx)/2);
  if (midIdx - startIdx > mergeLimit) {
    insertionMergeSort(array, startIdx, midIdx, mergeLimit);
  } else {
    insertionSort(array, startIdx, midIdx);
  }

  if (endIdx - midIdx + 1 > mergeLimit) {
    insertionMergeSort(array, midIdx + 1, endIdx, mergeLimit);
  } else {
    insertionSort(array, midIdx + 1, endIdx);
  }

  merge(array, startIdx, midIdx, endIdx);
}

module.exports = insertionMergeSort;
