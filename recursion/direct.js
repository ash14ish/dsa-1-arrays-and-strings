// Factorial

// function factorial(numb) {
//   if (numb <= 1) return 1;

//   return numb * factorial(numb - 1);
// }

// console.log(factorial(5));

// Reverse Array - Recursion

// const arr = [11, 13, 98, 27, 26, 92, 2, 12, 91, 31];

// console.log("array", [...arr]);

// function reverseArr(data, start, end) {
//   if (start <= end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];

//     reverseArr(data, start + 1, end - 1);
//   }
// }

// reverseArr(arr, 0, arr.length - 1);

// console.log("reversed array", arr);

// Recursive Binary Search

// let arrForSearch = [
//   1, 4, 6, 8, 12, 34, 54, 123, 129, 134, 167, 204, 214, 218, 230, 245, 249, 275,
//   280, 295, 300,
// ];

// let item = 230;

// let positionIndex = undefined;

// function recursiveBinarySearch(arr, left, right) {
//   if (left > right) return -1;
//   let mid = Math.floor((left + right) / 2);

//   if (item === arr[mid]) {
//     positionIndex = mid;
//   } else {
//     if (item > arr[mid]) {
//       left = mid + 1;
//     } else if (item < arr[mid]) {
//       right = mid - 1;
//     }

//     recursiveBinarySearch(arr, left, right);
//   }
// }

// recursiveBinarySearch(arrForSearch, 0, arrForSearch.length - 1);

// console.log(
//   positionIndex,
//   positionIndex === undefined ? "Not found" : arrForSearch[positionIndex]
// );
