// n^2

function selectionSort (array, startIdx = 0, endIdx = array.length - 1) {
  for (let i = startIdx; i < endIdx; i++) {
    let smallest = i;

    for (let j = i + 1; j <= endIdx; j++) {
      if (array[j] < array[smallest]) smallest = j;
    }

    [array[i], array[smallest]] = [array[smallest], array[i]];
  }
}

module.exports = selectionSort;
