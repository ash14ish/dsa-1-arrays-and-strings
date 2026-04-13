// const myAtoI = function (str) {
//   let i = 0;
//   let sign = 1;
//   let num = 0;

//   const INT_MAX = 2 ** 31 - 1;
//   const INT_MIN = -(2 ** 31);

//   // Leading space Trim
//   while (i < str.length && str[i] === " ") {
//     i++;
//   }

//   // Sign

//   if (str[i] === "+" || str[i] === "-") {
//     sign = str[i] === "-" ? -1 : 1;
//     i++;
//   }

//   // String to number conversion

//   while (i < str.length && str[i] >= "0" && str[i] <= "9") {
//     num = num * 10 + (str[i] - "0");
//     i++;

//     if (num > INT_MAX) return INT_MAX;
//     else if (num < INT_MIN) return INT_MIN;
//   }

//   return sign * num;
// };

// console.log(myAtoI("     -00142 dhrhk  "));
