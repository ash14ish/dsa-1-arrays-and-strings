// let arr = [1, 7, 3, 6, 5, 6];

// function pivotIndex(nums) {
//   let sum = 0;
//   let leftSum = 0;
//   let i;

//   for (i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }

//   for (i = 0; i < nums.length; i++) {
//     if (leftSum === sum - leftSum - nums[i]) {
//       return i;
//     }

//     leftSum += nums[i];
//   }

//   return -1;
// }

// console.log(pivotIndex(arr));
