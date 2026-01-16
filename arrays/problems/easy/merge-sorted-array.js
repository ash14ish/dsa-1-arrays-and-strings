// In place

// const one = [3, 4, 8, 11, 14, 17, 19, 20, 0, 0, 0, 0, 0];
// const two = [1, 5, 9, 12, 21];

// function mergeSortedArr(arr1, arr2, m, n) {
//   let arr1idx = m - 1;
//   let arr2idx = n - 1;
//   let mergedArrIdx = m + n - 1;

//   while (arr1idx >= 0 && arr2idx >= 0) {
//     if (arr1[arr1idx] > arr2[arr2idx]) {
//       arr1[mergedArrIdx] = arr1[arr1idx];
//       arr1idx--;
//       mergedArrIdx--;
//     } else {
//       arr1[mergedArrIdx] = arr2[arr2idx];
//       arr2idx--;
//       mergedArrIdx--;
//     }
//   }

//   while (arr2idx >= 0) {
//     arr1[mergedArrIdx] = arr2[arr2idx];
//     arr2idx--;
//     mergedArrIdx--;
//   }

//   console.log(arr1, arr1idx, arr2idx);
// }

// mergeSortedArr(one, two, one.length - two.length, two.length);
