const RAND_MAX = 99;

function* _randomNumber (count, randMax = RAND_MAX, randMin = 0) {
  for (let i = 0; i < count; i++) {
    yield randMin + Math.round(Math.random() * (randMax-randMin));
  }
}

function randomNumber (randMax = RAND_MAX, randMin = 0) {
  return [..._randomNumber(1, randMax, randMin)][0];
}

function randomArray (size, randMax, randMin) {
  return [..._randomNumber(size, randMax, randMin)].sort( (a, b) => a - b );
}

function arrayWithoutTargetValue (size, target, randMax, randMin) {
  return [..._randomNumber(size, randMax, randMin)].map( () => {
    for (var value = target; value === target; value = randomNumber(randMax, randMin));
    return value;
  }).sort( (a, b) => a - b );
}

function arrayWithTargetValueAtPosition (size, target, position, randMax) {
  const array = arrayWithoutTargetValue(position, target, target-1);
  array.push(target);
  return array.concat(arrayWithoutTargetValue(size-position-1, target, randMax, target+1));
}

module.exports = {
  randomNumber,
  randomArray,
  arrayWithoutTargetValue,
  arrayWithTargetValueAtPosition
};
