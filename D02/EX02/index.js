function calculateMatrixSum(matrix) {
   let sumOfArray = 0;
   let totalSum = 0;
   for (let i = 0; i < matrix.length; i++) {
      sumOfArray = 0;
      for (let j = 0; j < matrix[i].length; j++) {
         sumOfArray = sumOfArray + matrix[i][j];
      }
      totalSum = totalSum + sumOfArray;
   }
   return totalSum;
};

// Do not remove or change this line, or the tests won't work
export { calculateMatrixSum };
