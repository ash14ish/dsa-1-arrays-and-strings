// 1) String Reverse

// const arr = [11, 13, 98, 27, 26, 92, 2, 12, 91, 31];

// const reversedArr = [];

// console.log("String", [...arr]);

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr[arr.length - 1 - i] = arr[i];
// }

// console.log("reversed String", reversedArr);

// 2) String Reverse

// const arr = [11, 13, 98, 27, 26, 92, 2, 12, 91, 31];

// const arrLength = arr.length;

// console.log("String", [...arr]);

// for (let i = 0; i < arrLength / 2; i++) {
//   [arr[i], arr[arrLength - 1 - i]] = [arr[arrLength - 1 - i], arr[i]];
// }

// console.log("reversed String", arr);

// 3) String Reverse - Two pointers

// const arr = [11, 13, 98, 27, 26, 92, 2, 12, 91, 31];

// console.log("String", [...arr]);

// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
//   [arr[start], arr[end]] = [arr[end], arr[start]];

//   start++;
//   end--;
// }

// console.log("reversed String", arr);
