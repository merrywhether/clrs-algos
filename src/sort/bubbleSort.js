// n^2

function bubbleSort (array, startIdx = 0, endIdx = array.length - 1) {
  for (let i = startIdx; i < endIdx; i++) {
    for (let j = endIdx; j > i; j--) {
      if (array[j] < array[j-1]) {
        [array[j], array[j-1]] = [array[j-1], array[j]];
      }
    }
  }
}

module.exports = bubbleSort
