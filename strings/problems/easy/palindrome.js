// let string = "level";

// function isPalindrome(stringLC) {
//   stringLC = stringLC?.toLowerCase();

//   for (let i = 0; i < stringLC.length / 2; i++) {
//     if (stringLC[i] !== stringLC[stringLC.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function isPalindrome(stringLC) {
//   stringLC = stringLC?.toLowerCase();

//   let start = 0;
//   let end = stringLC.length - 1;

//   while (start < end) {
//     if (stringLC[start] !== stringLC[end]) {
//       return false;
//     }
//     start++;
//     end--;
//   }

//   return true;
// }

// console.log(isPalindrome(string));

// Palindrome ignoring non alpha numeric characters

// function isPalindrome(stringLC) {
//   stringLC = stringLC?.toLowerCase().replace(/[^a-z0-9]/g, "");
//   let left = 0;
//   let right = stringLC.length - 1;

//   while (left <= right) {
//     if (stringLC[left] !== stringLC[right]) {
//       return false;
//     }

//     left++;
//     right--;
//   }

//   return true;
// }

// console.log(isPalindrome(string));
