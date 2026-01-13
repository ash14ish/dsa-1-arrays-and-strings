// const output = document.getElementById("output");

// function printStars(maxSize) {
//   let result = "";
//   const rows = (maxSize + 1) / 2;
//   const midIdx = rows - 1;
//   let left, right;

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < maxSize; j++) {
//       left = midIdx - i;
//       right = midIdx + i;
//       if (j >= left && j <= right) {
//         result += "*";
//       } else {
//         result += " ";
//       }
//     }

//     result += "<br/>";
//   }

//   output.innerHTML = `<pre>${result}</pre>`;
// }

// printStars(7);

// function printStars(maxSize) {
//   let result = "";
//   const rows = Math.floor((maxSize + 1) / 2);
//   const midIdx = rows - 1;
//   let left, right;

//   for (let i = midIdx; i >= 0; i--) {
//       left = midIdx - i;
//       right = midIdx + i;
//     for (let j = 0; j < maxSize; j++) {
//       if (j >= left && j <= right) {
//         result += "*";
//       } else {
//         result += " ";
//       }
//     }

//     result += "<br/>";
//   }

//   output.innerHTML = `<pre>${result}</pre>`;
// }

// printStars(7);

// function printStars(iteration) {
//   const itr = iteration * 2;
//   let result = "";
//   const rows = Math.floor((itr + 1) / 2);
//   const midIdx = rows - 1;
//   let left, right;

//   for (let i = 0; i < iteration; i++) {
//     left = midIdx - i - 1;
//     right = midIdx + i + 1;
//     for (let j = 0; j <= itr; j++) {
//       if (j <= left || j >= right) {
//         result += " ";
//       } else {
//         if (i % 2 === 0) {
//           if (j % 2 === 0) {
//             result += " ";
//           } else {
//             result += "*";
//           }
//         } else {
//           if (j % 2 !== 0) {
//             result += " ";
//           } else {
//             result += "*";
//           }
//         }
//       }
//     }
//     result += "<br/>";
//   }

//   output.innerHTML = `<pre>${result}</pre>`;
// }

// printStars(6);
