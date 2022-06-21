function calculateMatrixDiagonalSum(matrix) {
  let sumOfDiagonal = 0;
  let diagonalIndexes = 0;
  for (let i = 0; i < matrix.length; i++) {
    sumOfDiagonal = sumOfDiagonal + matrix[i][diagonalIndexes];
    diagonalIndexes++;
    console.log("Sum of Diagonal " + sumOfDiagonal + ": " + sumOfDiagonal);
  }
  return sumOfDiagonal;
}

// Do not remove or change this line, or the tests won't work
export { calculateMatrixDiagonalSum };
