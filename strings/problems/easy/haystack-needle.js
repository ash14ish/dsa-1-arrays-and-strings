// let haystack = "ssdbutsad",
//   needle = "";

// Brute Forces

// looping iterations

// function strStr(haystack, needle) {
//   if (needle === "") return 0;

//   let i, j;
//   for (i = 0; i <= haystack.length - needle.length; i++) {
//     j = 0;

//     while (j < needle.length && haystack[i + j] === needle[j]) {
//       j++;
//     }

//     if (j === needle.length) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(strStr(haystack, needle));

// two pointers

// let haystack = "mississippi",
//   needle = "issip";

// function strStr(haystack, needle) {
//   if (needle === "") return 0;

//   let i = 0,
//     j = 0;

//   while (i < haystack.length) {
//     if (haystack[i] === needle[j]) {
//       i++;
//       j++;
//       if (j === needle.length) {
//         return i - j;
//       }
//     } else {
//       i = i - j + 1;
//       j = 0;
//     }
//   }

//   return -1;
// }

// console.log(strStr(haystack, needle));
