// const arr = [5, 7, 7, 7, 8, 8, 8, 10],
//   target = 8;

// function searchRange(nums, target) {
//   let start;
//   let end;

//   let mid;
//   let ans;

//   function findLeftBoundary() {
//     start = 0;
//     end = nums.length - 1;
//     ans = -1;

//     while (start <= end) {
//       mid = Math.floor((start + end) / 2);

//       if (nums[mid] < target) {
//         start = mid + 1;
//       } else {
//         if (nums[mid] === target) ans = mid;
//         end = mid - 1;
//       }
//     }

//     return ans;
//   }

//   function findRightBoundary() {
//     start = 0;
//     end = nums.length - 1;
//     ans = -1;
//     while (start <= end) {
//       mid = Math.floor((start + end) / 2);

//       if (nums[mid] > target) {
//         end = mid - 1;
//       } else {
//         if (nums[mid] === target) ans = mid;
//         start = mid + 1;
//       }
//     }

//     return ans;
//   }

//   return [findLeftBoundary(), findRightBoundary()];
// }

// console.log(searchRange(arr, target));
