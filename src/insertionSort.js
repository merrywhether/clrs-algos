class InsertionSorter {
  static classic(array) {
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

  static alternate(array) {
    const sorted = array.slice(0, 1);

    array.slice(1).forEach( (val, idx) => {
      while (idx >= 0 && sorted[idx] > val) {
        sorted[idx+1] = sorted[idx]
        idx--;
      }
      sorted[idx+1] = val;
    });

    return sorted;
  }
}

module.exports = InsertionSorter;
