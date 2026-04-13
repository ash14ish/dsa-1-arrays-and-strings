// function lengthOfLastWord(str) {
//   let i;
//   let length = 0;

//   for (i = str.length - 1; i >= 0; i--) {
//     if (str[i] !== " ") break;
//   }

//   for (i; i >= 0; i--) {
//     if (str[i] === " ") {
//       break;
//     }

//     length++;
//   }

//   return length;
// }

// console.log(lengthOfLastWord("a "));

// function lengthOfLastWord(str) {
//   let i = str.length - 1;
//   let length = 0;

//   while (i >= 0 && str[i] === " ") {
//     i--;
//   }

//   while (i >= 0 && str[i] !== " ") {
//     length++;
//     i--;
//   }

//   return length;
// }

// console.log(lengthOfLastWord("hello worlder    "));
