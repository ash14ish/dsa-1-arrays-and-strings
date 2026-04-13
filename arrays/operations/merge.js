// Array Merge

// const arr1 = [11, 13, 98, 27, 26];
// const arr2 = [92, 2, 12, 91, 31];

// const mergedArr = [];

// for (let i = 0; i < arr1.length; i++) {
//   mergedArr[i] = arr1[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//   mergedArr[i + arr1.length] = arr2[i];
// }

// console.log("merged array", mergedArr);

// Array Merge While

// const arr1 = [11, 13, 26, 29, 35, 56];
// let arr1Idx = 0;

// const arr2 = [2, 12, 28, 96, 105, 180];
// let arr2Idx = 0;

// const mergedArr = [];
// let mergedArrIdx = 0;

// while (arr1Idx < arr1.length && arr2Idx < arr2.length) {
//   if (arr1[arr1Idx] <= arr2[arr2Idx]) {
//     mergedArr[mergedArrIdx++] = arr1[arr1Idx++];
//   } else if (arr1[arr1Idx] > arr2[arr2Idx]) {
//     mergedArr[mergedArrIdx++] = arr2[arr2Idx++];
//   }
// }

// while (arr1Idx < arr1.length) {
//   mergedArr[mergedArrIdx++] = arr1[arr1Idx++];
// }

// while (arr2Idx < arr2.length) {
//   mergedArr[mergedArrIdx++] = arr2[arr2Idx++];
// }

// console.log("merged array", mergedArr);
