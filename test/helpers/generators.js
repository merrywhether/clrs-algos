function randomNumber (limit=99) {
  return Math.round(Math.random() * limit);
}

function randomArray (size, limit) {
  return [...Array(size)].map(randomNumber.bind(undefined, limit));
}

function arrayWithoutTargetValue (size, target, limit) {
  return [...Array(size)].map( () => {
    for (var value = target ; value === target; value = randomNumber(limit));
    return value;
  });
}

function arrayWithTargetValueAtPosition (size, target, position, limit) {
  const array = arrayWithoutTargetValue(size, target, limit);

  if (position instanceof Array) {
    positions.forEach( idx => array[idx] = target );
  } else {
    array[position] = target;
  }

  return array;
}

module.exports = {
  randomNumber,
  randomArray,
  arrayWithoutTargetValue,
  arrayWithTargetValueAtPosition
};
