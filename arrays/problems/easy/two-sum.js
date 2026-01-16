// With for loop

// let nums = [2, 7, 11, 15],
//   target = 9;

// function twoSum(arr, target) {
//   let i, j;
//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       const isTargetSum = arr[i] + arr[j] === target;
//       if (isTargetSum) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum(nums, target));

// With hash map

// let nums = [2, 11, 7, 15],
//   target = 9;

// function twoSum(arr, target) {
//   let i;
//   let map = new Map();

//   for (i = 0; i < arr.length; i++) {
//     const complement = target - arr[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(arr[i], i);
//   }
// }

// console.log(twoSum(nums, target));
