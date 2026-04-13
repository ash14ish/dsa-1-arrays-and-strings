// function uniqueCharacter(s) {
//   let ch;
//   let objStr = {};

//   for (ch of s) {
//     objStr[ch] = (objStr[ch] || 0) + 1;
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (objStr[s[i]] === 1) return i;
//   }

//   return -1;
// }

// in case we need to send the character instead of index

// function uniqueCharacter(str) {
//   const freq = {};

//   for (let ch of str) {
//     freq[ch] = (freq[ch] || 0) + 1;
//   }

//   for (let ch in freq) {
//     if (freq[ch] === 1) return ch;
//   }

//   return -1;
// }

// console.log(uniqueCharacter("lleettccoodde"));
