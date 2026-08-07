// // // let n = [10, 20, 30, 40, 50];
// // // let sum = 0;

// // const { log } = require("node:console");

// // // for (let i = 1; i <= n.length - 1; i++) {
// // //   sum += n[i];
// // //   console.log("su", sum, n[i]);
// // // }
// // // console.log(sum);

// // let arr = [10, 200, 500, 20, 1];

// // let max = arr[0];

// // for (let i = 1; i <= arr.length; i++) {
// //   if (max < arr[i]) {
// //     max = arr[i];
// //   }
// // }
// // console.log(max);

// // let arr = [10, 203, 30, 5, 45, 7, 568, 456, 2, 9];

// // let fMax = Math.max(arr[0], arr[1]);
// // let sMax = Math.min(arr[0], arr[1]);

// // for (let i = 2; i <= arr.length; i++) {
// //   if (fMax < arr[i]) {
// //     sMax = fMax;
// //     fMax = arr[i];
// //   } else if (sMax < arr[i] && fMax !== arr[i]) {
// //     sMax = arr[i];
// //   }
// // }
// // console.log("max", fMax, sMax);

// // let arr = [1, 2, 3, 4, 5, 6, 7];
// // let newArr = new Array(arr.length);
// // let j = 0
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     newArr[i] = arr[j];
// //     j++
// // }
// // console.log("new", newArr);

// // let arr = [1, 2, 3, 4, 5,90,3,3];
// // let i = 0;
// // let j = arr.length - 1;

// // while (i != j) {
// //   let temp = arr[i];
// //   arr[i] = arr[j];
// //   arr[j] = temp;
// //   i++;
// //   j--;
// // }
// // console.log("arr", arr);

// let arr = [0, 1, 1, 1, 0, 0, 1, 0, 1];

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] === 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;

//     j++;
//   }
//   i++;
// }

// console.log("ar", arr);

// let n = [1, 2, 3, 4, 5];

// const lastI = n[0];
// for (let i = 0; i <= n.length - 1; i++) {
//   n[i] = n[i + 1];
// }
// n[n.length - 1] = lastI;
// console.log("n", n);

// let n = [1, 2, 3, 4, 5];
// let firstIndex = n[n.length - 1];

// for (let i = n.length - 1; i > 0; i--) {
//   n[i] = n[i - 1];
// }
// n[0] = firstIndex;
// console.log("n", n);

// for (let i = 1; i <= 4; i++) {
//   console.log("Task ", i);
//   for (let j = 1; j <= 3; j++) {
//     console.log("hello");
//   }
// // }

// let arr = [1, 2, 3, 4, 5];
// let k = 2 % arr.length;

// console.log("k", k);

// for (let j = 1; j <= 2; j++) {
//   let firstIndex = arr[0];
//   for (let i = 0; i <= arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = firstIndex;
// }

// console.log("ar", arr);

// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = 2 % arr.length;

// for (let i = 0; i < arr.length; i++) {
//     //   temp[i] = arr[(i + k) % arr.length];
//     temp[(i+k) % arr.length] = temp[i]
// }

// console.log(temp);

// let arr = [1, 2, 3, 4, 5];

// let k = 2 % arr.length;
// reverse(0, arr.length - 1);
// reverse(0, k - 1);
// reverse(k, arr.length - k);
// // reverse(0, k - 1);
// // reverse(k, arr.length - 1);
// // reverse(0, arr.length - 1);
// console.log("arr", arr);

// function reverse(i, j) {
//   while (i < j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
//   }
// }

// let arr = [1, 1, 2];
// let j = 1;

// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] !== arr[i + 1]) {
//     arr[j] = arr[i + 1];
//     j++;
//   }
// }
// console.log("arr", arr);

// let arr1 = [22, 5, 6];
// let arr2 = [8, 3, 4, 1, 9, 20];
// let newArr = new Array(arr1.length + arr2.length);

// let i = 0;
// let j = 0;
// let k = 0;

// while (i < arr1.length && j < arr2.length) {
//   if (arr1[i] < arr2[j]) {
//     newArr[k++] = arr1[i++];
//   } else if (arr2[j] < arr1[i]) {
//     newArr[k++] = arr2[j++];
//   }
// }

// while (i < arr1.length) {
//   newArr[k++] = arr1[i++];
//   //   if (arr1[i] < arr1[i + 1]) {
//   //     newArr[k] = arr1[i];
//   //     i++;
//   //     k++;
//   //   } else {
//   //     newArr[k] = arr1[i + 1];
//   //     i++;
//   //     k++;
//   //   }
// }

// while (j < arr2.length) {
//   newArr[k++] = arr2[j++];
//   //   if (arr2[j] < arr2[j + 1]) {
//   //     newArr[k] = arr2[j];
//   //     j++;
//   //     k++;
//   //   } else {
//   //     newArr[k] = arr2[j + 1];
//   //     j++;
//   //     k++;
//   //   }
// }
// console.log(newArr);

// let nums1 = [1, 2, 3, 0, 0, 0];
// let nums2 = [2, 5, 6];
// let m = 3;
// let n = 3;
// let merge = new Array(m + n);

// let i = 0;
// let j = 0;
// let k = 0;
// Output: [1, 2, 2, 3, 5, 6];

// while (i < m && j < n) {
//   if (nums1[i] <= nums2[j]) {
//     merge[k] = nums1[i];
//     i++;
//   } else {
//     merge[k] = nums2[j];
//     j++;
//   }

//   k++;
// }

// while (i < m) {
//   merge[k] = nums1[i];
//   i++;
//   k++;
// }
// while (j < n) {
//   merge[k] = nums2[j];
//   j++;
//   k++;
// }
// nums1 = merge;

//  while (i < m && j < n) {
//    if (nums1[i] <= nums2[j]) {
//      merge[k] = nums1[i];
//      i++;
//    } else {
//      merge[k] = nums2[j];
//      j++;
//    }
//    k++;
//  }

//  while (i < m) {
//    merge[k] = nums1[i];
//    i++;
//    k++;
//  }
//  while (j < n) {
//    merge[k] = nums2[j];
//    j++;
//    k++;
//  }
// [...nums1] = [...merge];

// console.log(nums1);

// let prices = [7, 1, 5, 3, 6, 4];
// let min = prices[0];
// let maxProfit = 0;

// for (let i = 1; i < prices.length; i++) {
//   if (prices[i] < min) min = prices[i];
//     let profit = prices[i] - min;
//     maxProfit = Math.max(profit, maxProfit);
// }
// console.log(maxProfit);

// let n = [2, 0, 1];
// // let n = [2, 0, 2, 1, 1, 0];

// let j = 0;
// let i = 0;
// let k = n.length - 1;

// while (i <= k) {
//   let temp = n[i];
//   if (n[i] === 0) {
//     n[i] = n[j];
//     n[j] = temp;
//     i++;
//     j++;
//   } else if (n[i] === 2) {
//     console.log("ni", i, n[i], n[k]);
//     n[i] = n[k];
//     n[k] = temp;

//     k--;
//   } else {
//     i++;
//   }
// }
// console.log("n", n);

// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let sum = 0;
// let maxSum = -Infinity;

// for (let i = 1; i < nums.length; i++) {
//   let cv = nums[i];
//   sum += cv;
//   if (sum > maxSum) maxSum = sum;
//   if (sum < 0) {
//     sum = 0;
//   }
// }

// console.log(maxSum);

// let nums = [3, 2, 3];
// // let nums = [2, 2, 1, 1, 1, 2, 2];

// let base = nums[0];
// let count = 1;

// for (let i = 1; i < nums.length ; i++) {
//   if ((count = 0)) {
//     base = nums[i];
//     count = 1;
//   } else if (nums[i] === base) {
//     count++;
//   } else {
//     count--;
//   }
// }

// console.log("c", count, base);

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let ans = 0;
let length = height.length;
let left = new Array(height.length);
let right = new Array(height.length);
let leftBase = height[0];
let rightBase = height[height.length - 1];
left[0] = leftBase;
right[height.length - 1] = rightBase;

for (let i = 1; i < length; i++) {
  leftBase = Math.max(leftBase, height[i]);
  left[i] = leftBase;
}

for (let i = length - 2; i >= 0; i--) {
  rightBase = Math.max(rightBase, height[i]);
  right[i] = rightBase;
}

for (let i = 0; i < height.length; i++) {
  ans += Math.min(left[i], right[i]) - height[i];
}

// for (let i = 1; i < length; i++) {
//   left[i] = Math.max(leftBase, height[i]);
// }
// for (let i = length - 2; i >= 0; i--) {
//   right[i] = Math.max(rightBase, height[i]);
// }

// for (let i = 1; i < length; i++) {
//   ans += Math.min(left[i], right[i]) - height[i];
// }

console.log("left", left, right, ans);
