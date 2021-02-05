var matrixExample = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
  ];
  
  function sumUpDiagonals(matrix) {
    var length = matrix[0].length;
    var result = 0;
    
    for (var i = 0; length > i; i++) {
      var j = length - 1 - i;
      result += matrix[i][i] + matrix[i][j];
    }
    return result;
  }
  
  console.log(sumUpDiagonals(matrixExample));
  