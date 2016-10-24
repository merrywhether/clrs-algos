function insertionSort (array) {
  for (let j = 1; j < array.length; j++) {
    const key = array[j];
    let i = j - 1;

    while ( i >= 0 && array[i] > key ) {
      array[i+1] = array[i];
      i--;
    }

    array[i+1] = key;
  }

  return array;
}

module.exports = insertionSort;
