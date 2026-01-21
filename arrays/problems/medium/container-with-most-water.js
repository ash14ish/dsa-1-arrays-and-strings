// let h = [1, 8, 6, 2, 5, 4, 8, 3, 7];

// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let maxWater = 0;
//   let area;

//   while (left < right) {
//     area = (right - left) * Math.min(height[left], height[right]);
//     maxWater = Math.max(maxWater, area);

//     if (height[left] < height[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return maxWater;
// }

// console.log(maxArea(h));
