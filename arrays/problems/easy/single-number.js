// XOR

// let nums = [1, 2, 1, 4, 2];

// function singleNumber(nums) {
//   let result = 0;
//   let i;

//   for (i = 0; i < nums.length; i++) {
//     result ^= nums[i];
//   }

//   return result;
// }

// console.log(singleNumber(nums));

// HASHMAP

// let nums = [1, 2, 1, 4, 2];

// function singleNumber(nums) {
//   let freq = new Map();
//   let num;
//   let result = 0;

//   for (num of nums) {
//     freq.set(num, (freq.get(num) || 0) + 1);
//   }

//   for (num of nums) {
//     if (freq.get(num) === 1) return num;
//   }

//   return result;
// }

// console.log(singleNumber(nums));
