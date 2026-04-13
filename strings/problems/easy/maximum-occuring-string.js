// function maxiumOccuringCharacter(str) {
//   let objStr = {};
//   let maxKey = "";

//   for (let i = 0; i < str.length; i++) {
//     let key = str[i];
//     objStr[key] = (objStr[key] || 0) + 1;

//     if (maxKey === "" || objStr[key] > objStr[maxKey]) {
//       maxKey = key;
//     }
//   }

//   return maxKey;
// }

// console.log(maxiumOccuringCharacter("hello"));

// function maxOccurringCharacter(str) {
//   const freq = {};
//   let maxChar = "";

//   for (const char of str) {
//     freq[char] = (freq[char] || 0) + 1;

//     if (freq[char] > (freq[maxChar] || 0)) {
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// console.log(maxiumOccuringCharacter("hello"));
