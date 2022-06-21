function calculateMatrixColumnSum(matrix, columnIndex) {
  let sumOfColumn = 0;
  for (let i = 0; i < matrix.length; i++) {
    sumOfColumn = sumOfColumn + matrix[i][columnIndex];
    console.log("Sum of Column " + columnIndex + ": " + sumOfColumn);
  }
  return sumOfColumn;
};

// Do not remove or change this line, or the tests won't work
export { calculateMatrixColumnSum };
