// function pascalTriangle(numRows) {
//   let i, j;
//   let arr = [];

//   for (i = 0; i < numRows; i++) {
//     arr[i] = [];

//     for (j = 0; j <= i; j++) {
//       if (j === 0 || j === i) {
//         arr[i][j] = 1;
//       } else {
//         arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1];
//       }
//     }
//   }

//   return arr;
// }

// console.log(pascalTriangle(5));

// function pascalTriangleRowIdx(rowIndex) {
//   let i, j;
//   let arr = new Array(rowIndex + 1);
//   arr.fill(0, 0, rowIndex + 1);
//   arr[0] = 1;

//   for (i = 1; i <= rowIndex; i++) {
//     for (j = i; j > 0; j--) {
//       arr[j] = arr[j] + arr[j - 1];
//     }
//   }

//   return arr;
// }

// console.log(pascalTriangleRowIdx(4));
