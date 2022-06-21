function sumNumbersWhileLoop(array) {
  let index = 0;
  let sumOfNumbers = 0;
  while (index < array.length) {
    sumOfNumbers = sumOfNumbers + array[index];
    index++
  }
  return sumOfNumbers;
};

function sumNumbersForLoop(array) {
  let sumOfNumbers = 0;
  for (let index = 0; index < array.length; index++) {
    sumOfNumbers = sumOfNumbers + array[index];
  }
  return sumOfNumbers;
};

// Do not remove or change this line, or the tests won't work
export { sumNumbersWhileLoop, sumNumbersForLoop };

