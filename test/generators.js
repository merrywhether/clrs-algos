const RAND_MAX = 99;

function randomNumber (randMax = RAND_MAX, randMin = 0) {
  return randMin + Math.round(Math.random() * (randMax-randMin));
}

function randomArray (size, randMax, randMin) {
  return [...Array(size)].map(randomNumber.bind(undefined, randMax, randMin)).sort();
}

function arrayWithoutTargetValue (size, target, randMax, randMin) {
  return [...Array(size)].map( () => {
    for (var value = target ; value === target; value = randomNumber(randMax, randMin));
    return value;
  }).sort();
}

function arrayWithTargetValueAtPosition (size, target, position, limit) {
  const array = arrayWithoutTargetValue(position, target, target-1);
  array.push(target);
  return array.concat(arrayWithoutTargetValue(size-position-1, target, RAND_MAX, target+1));
}

module.exports = {
  randomNumber,
  randomArray,
  arrayWithoutTargetValue,
  arrayWithTargetValueAtPosition
};
