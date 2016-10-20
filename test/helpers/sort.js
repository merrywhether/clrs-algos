const arrayGen = (size, limit=100) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.round(Math.random() * limit));
  }
  return array;
}

module.exports = {
  arrayGen
};
