// n^2

function bruteMaxSubarray(array, startIdx=0, endIdx=array.length-1) {
  let maxSum = -Infinity;
  let leftIdx = startIdx, rightIdx = endIdx;
  for (let rightScan = startIdx; rightScan <= endIdx; rightScan++) {
    for (let leftScan = startIdx; leftScan <= rightScan; leftScan++) {
      const sum = array.slice(leftScan, rightScan+1).reduce( (sum, val) => sum + val );
      if (sum > maxSum) {
        maxSum = sum;
        leftIdx = leftScan;
        rightIdx = rightScan;
      }
    }
  }

  return {startIdx: leftIdx, endIdx: rightIdx, sum: maxSum};
}

module.exports = bruteMaxSubarray;
