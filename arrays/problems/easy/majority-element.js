// const majorityElement = function (arr) {
//   let i;
//   const map = new Map();
//   const threshold = Math.floor(arr.length / 2);
//   let current;

//   for (i = 0; i < arr.length; i++) {
//     current = map.get(arr[i]);

//     const count = (map.get(arr[i]) || 0) + 1;
//     map.set(arr[i], count);

//     if (count > threshold) {
//       return arr[i];
//     }
//   }
// };

// console.log(majorityElement([3, 2, 3, 1, 3, 3]));

// const majorityElement = function (arr) {
//   let i = 0;
//   let candidate;
//   let count = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (count === 0) {
//       candidate = arr[i];
//       count++;
//     } else {
//       candidate === arr[i] ? count++ : count--;
//     }
//   }

//   return candidate;
// };

// console.log(majorityElement([2, 2, 3, 3, 3, 3]));
