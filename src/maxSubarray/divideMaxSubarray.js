// n lg n

function maxCrossingSubarray(array, startIdx, midIdx, endIdx) {
  let leftMaxSum = -Infinity;
  let rightMaxSum = -Infinity;
  let leftSum = rightSum = 0;
  let leftMaxIdx, rightMaxIdx;

  for (let i = midIdx; i >= startIdx; i--) {
    leftSum += array[i];
    if (leftSum > leftMaxSum) {
        leftMaxSum = leftSum;
        leftMaxIdx = i;
    }
  }

  for (let i = midIdx + 1; i <= endIdx; i++) {
    rightSum += array[i];
    if (rightSum > rightMaxSum) {
      rightMaxSum = rightSum;
      rightMaxIdx = i;
    }
  }

  return {startIdx: leftMaxIdx, endIdx: rightMaxIdx, sum: leftMaxSum + rightMaxSum};
}

function divideMaxSubarray(array, startIdx=0, endIdx=array.length-1) {
  if (startIdx === endIdx) {
    return {startIdx, endIdx: endIdx, sum: array[startIdx]};
  }
  const midIdx = Math.floor((startIdx + endIdx)/2);
  const leftData = divideMaxSubarray(array, startIdx, midIdx);
  const rightData = divideMaxSubarray(array, midIdx + 1, endIdx);
  const crossData = maxCrossingSubarray(array, startIdx, midIdx, endIdx);

  // prefer left-most subarray for ties
  if (leftData.sum >= crossData.sum && leftData.sum >= rightData.sum) return leftData;
  if (crossData.sum >= rightData.sum) return crossData;
  return rightData;
}

module.exports = divideMaxSubarray;
