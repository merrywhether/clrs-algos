// n lg n

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

function mergeSort (array, startIdx = 0, endIdx = array.length - 1) {
  if (endIdx <= startIdx) return;

  const midIdx = Math.floor((startIdx + endIdx)/2);
  mergeSort(array, startIdx, midIdx);
  mergeSort(array, midIdx + 1, endIdx);
  merge(array, startIdx, midIdx, endIdx);
}

module.exports = mergeSort;
