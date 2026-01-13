// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

// function romanToIntegerConversion(str) {
//   let i,
//     int = 0;

//   for (i = str.length - 1; i >= 0; i--) {
//     if (!roman[str[i]]) break;
//     if (roman[str[i]] < roman[str[i + 1]]) int -= roman[str[i]];
//     else int += roman[str[i]];
//   }

//   return int;
// }

// console.log(romanToIntegerConversion("XCI"));
