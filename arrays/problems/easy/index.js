// Plus One

// var plusOne = function (digits: number[]) {
//   let i = digits.length - 1;

//   if (digits[i] === 9) {
//     while (i > 0 && digits[i] === 9) {
//       digits[i] = 0;
//       i--;
//     }

//     if (i == 0 && digits[i] === 9) {
//       digits[i] = 1;
//       digits[digits.length] = 0;
//     } else {
//       digits[i]++;
//     }
//   } else {
//     digits[i]++;
//   }

//   return digits;
// };

// console.log(plusOne([9, 9, 9, 9, 9]));

// Remove duplicates from sorted array

// const arr = [1, 3, 4, 5, 5, 5, 12, 12, 14, 15, 17, 17, 17, 18];
// let k = 0;
// let i;

// for (i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[k]) {
//     k++;
//     arr[k] = arr[i];
//   }
// }

// arr.length = k + 1;

// console.log(arr);

// Remove duplicates from sorted array

// const arr = [12, 3, 4, 5, 5, 5, 12, 12, 14, 15, 17, 17, 18];
// let val = 12;
// let k = 0;
// let i;

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] !== val) {
//     arr[k] = arr[i];
//     k++;
//   }
// }

// arr.length = k;

// console.log(arr);

// Search Insert Position

// let nums = [2, 3, 5, 7, 8, 10];
// let target = 1;

// let left = 0;
// let right = nums.length - 1;
// let position = undefined;

// let mid;

// while (left <= right) {
//   mid = Math.floor((left + right) / 2);

//   if (nums[mid] > target) {
//     right = mid - 1;
//   } else if (nums[mid] < target) {
//     left = mid + 1;
//   } else {
//     position = mid;
//     break;
//   }
// }

// if (!position) {
//   position = left;
// }
