// const myAtoI = function (s) {
//   let i = 0;
//   let sign = 1;
//   let num = 0;

//   const INT_MAX = 2 ** 31 - 1;
//   const INT_MIN = -(2 ** 31);

//   while (i < s.length && s[i] === " ") {
//     i++;
//   }

//   if (s[i] === "+" || s[i] === "-") {
//     sign = s[i] === "-" ? -1 : 1;
//     i++;
//   }

//   while (i < s.length && s[i] <= "9" && s[i] >= "0") {
//     num = num * 10 + (s[i] - "0");
//     i++;

//     if (sign * num >= INT_MAX) return INT_MAX;
//     if (sign * num <= INT_MIN) return INT_MIN;
//   }

//   return sign * num;
// };

// console.log(myAtoI("+1"));
