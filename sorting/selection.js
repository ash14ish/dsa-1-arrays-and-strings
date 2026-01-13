// Selection Sort - in this type of sorting we select the mininum value in one loop and then swap it
// With each loop minimum value sorting at the start index processed.

// ascending order

// let arr = [20, 91, 12, 13, 5, 21];

// console.log("original arr::", [...arr]);

// for (let i = 0; i < arr.length - 1; i++) {
//   let minIdx = i;

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[minIdx]) {
//       minIdx = j;
//     }
//   }

//   console.log(minIdx);
//   [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
// }

// console.log("sorted arr::", arr);

// descending order - method 1

// let arr = [20, 91, 12, 13, 5, 21];

// console.log("original arr::", [...arr]);

// for (let i = 0; i < arr.length - 1; i++) {
//   let maxIdx = i;

//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] > arr[maxIdx]) {
//       maxIdx = j;
//     }
//   }

//   console.log(maxIdx);
//   [arr[maxIdx], arr[i]] = [arr[i], arr[maxIdx]];
// }

// console.log("sorted arr::", arr);

// descending order - method 2

// let arr = [20, 91, 12, 13, 5, 21];

// console.log("original arr::", [...arr]);

// for (let i = arr.length - 1; i > 0; i--) {
//   let maxIdx = i;

//   for (let j = i - 1; j >= 0; j--) {
//     if (arr[j] < arr[maxIdx]) {
//       maxIdx = j;
//     }
//   }

//   console.log(maxIdx);
//   [arr[maxIdx], arr[i]] = [arr[i], arr[maxIdx]];
// }

// console.log("sorted arr::", arr);
