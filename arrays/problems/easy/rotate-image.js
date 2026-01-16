// const input = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function rotateImage(matrix) {
//   let n = matrix.length;
//   let i, j;

//   let start, end;

//   for (i = 0; i < n; i++) {
//     for (j = i + 1; j < n; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }

//   for (i = 0; i < n; i++) {
//     const matrixItem = matrix[i];
//     start = 0;
//     end = matrixItem.length - 1;

//     while (start < end) {
//       [matrixItem[start], matrixItem[end]] = [
//         matrixItem[end],
//         matrixItem[start],
//       ];
//       start++;
//       end--;
//     }
//   }

//   console.log(matrix);
// }

// rotateImage(input);
