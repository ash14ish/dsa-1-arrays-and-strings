// Bubble Sort - It compares the adjacent element
// in this the largest element is fixed at the end for each loop
// arr.length - i - 1 => so this is the reason why inner loop is looped till this

// arr.length - i => at this index largest will be fixed

// let arr = [20, 91, 12, 13, 5, 21];

// console.log("original arr::", [...arr]);

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }

// console.log("sorted arr::", arr);
