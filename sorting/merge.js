// let arr = [20, 91, 12, 13, 5, 21];

// console.log("original arr::", [...arr]);

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);

//   const sortedLeft = mergeSort(left);
//   const sortedRight = mergeSort(right);

//   return merge(sortedLeft, sortedRight);
// }

// function merge(left, right) {
//   const arr1 = left;
//   let arr1Idx = 0;

//   const arr2 = right;
//   let arr2Idx = 0;

//   const mergedArr = [];
//   let mergedArrIdx = 0;

//   while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
//     if (arr1[arr1Idx] <= arr2[arr2Idx]) {
//       mergedArr[mergedArrIdx++] = arr1[arr1Idx++];
//     } else if (arr1[arr1Idx] > arr2[arr2Idx]) {
//       mergedArr[mergedArrIdx++] = arr2[arr2Idx++];
//     }
//   }

//   while (arr1Idx < arr1.length) {
//     mergedArr[mergedArrIdx++] = arr1[arr1Idx++];
//   }

//   while (arr2Idx < arr2.length) {
//     mergedArr[mergedArrIdx++] = arr2[arr2Idx++];
//   }

//   console.log(mergedArr);

//   return mergedArr;
// }

// mergeSort(arr);
// console.log("sorted arr::", mergeSort(arr));
