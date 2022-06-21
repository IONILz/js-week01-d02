function calculateSumRecursion(array) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  let sumOfNumbers = array[0] + calculateSumRecursion(array.slice(1));
  return sumOfNumbers;
};

// Do not remove or change this line, or the tests won't work
export { calculateSumRecursion };
