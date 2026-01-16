// Contains Duplicate - Normal Approach - O(n2)

// const arr = [1, 2, 3, 1];

// function containsDuplicate(arr) {
//   let i, j;

//   for (i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[j] === arr[i]) {
//         return true;
//       }
//     }
//   }

//   return false;
// }

// console.log(containsDuplicate(arr));

// Set approach

// const arr = [1, 2, 3, 1];

// function containsDuplicate(arr) {
//   let seen = new Set();

//   for (const val of arr) {
//     if (seen.has(val)) return true;
//     seen.add(val);
//   }

//   return false;
// }

// console.log(containsDuplicate(arr));

// Set has approach

// const arr = [1, 2, 3, 1];

// function containsDuplicate(arr) {
//   return new Set(arr).size !== arr.length;
// }

// console.log(containsDuplicate(arr));
