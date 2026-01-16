// let nums = [0, 1, 0, 3, 12];

// function moveZeroes(nums) {
//   let i;
//   let arr = [];

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       arr[arr.length] = nums[i];
//     }
//   }

//   for (i = 0; i < nums.length; i++) {
//     if (arr[i]) {
//       nums[i] = arr[i];
//     } else {
//       nums[i] = 0;
//     }
//   }

//   console.log(nums);
// }

// console.log(moveZeroes(nums));

// let nums = [0, 1, 0, 3, 0, 0, 0, 12];

// function moveZeroes(nums) {
//   let i;
//   let k = 0;

//   for (i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   for (i = k; i < nums.length; i++) {
//     nums[i] = 0;
//   }

//   console.log(k, nums);
// }

// console.log(moveZeroes(nums));
