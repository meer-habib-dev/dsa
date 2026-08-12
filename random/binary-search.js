// // let arr = [1, 2, 3, 4, 64, 80, 90];
// // let target = 3;
// // let f = 0;
// // let l = arr.length - 1;

// // // for (let i = f; i <= l; i++) {
// // //   let mid = parseInt((f + l) / 2);
// // //   //   console.log("min", mid);
// // //   if (arr[mid] === target) console.log("target found", mid, arr[mid]);
// // //   if (arr[mid] < target) f = mid + 1;
// // //   if (arr[mid] > target) l = mid - 1;
// // // }

// // // while (f <= l) {
// // //   let mid = parseInt((f + l) / 2);
// // //   if (arr[mid] === target) {
// // //     console.log("target found", mid, arr[mid]);
// // //     break;
// // //   }
// // //   if (arr[mid] < target) f = mid + 1;
// // //   if (arr[mid] > target) l = mid - 1;
// // // }

// // function targetFn(arr, f, l) {

// //   let mid = (f + l) / 2;

// //   if (arr[mid] === target) console.log("target found", mid, arr[mid]);
// //   if (arr[mid] < target) f = mid + 1;
// //   if (arr[mid] > target) l = mid - 1;
// // }

// // targetFn(arr, f, l);
// // console.log("f", f, l);

// let nums = [1, 3, 5, 6],
//   target = 10;

// let first = 0;
// let last = nums.length - 1;
// let targetIndex = -1;

// while (first <= last) {
//   let middle = Math.floor((first + last) / 2);

//   if (target > nums[middle]) {
//     first = middle + 1;
//     targetIndex = first;
//   } else if (target < nums[middle]) {
//     last = middle - 1;
//     targetIndex = middle;
//   } else {
//     targetIndex = middle;
//     break;
//   }
// }
// console.log(targetIndex);

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
let first = 0;
let last = nums.length - 1;

while (first <= last) {
  let mid = Math.floor((first + last) / 2);

  if (target === nums[mid]) {
    return mid;
  }

  if (nums[mid] >= nums[first]) {
    if (target >= nums[first] && target <= nums[mid]) {
      last = mid;
    } else {
      first = mid + 1;
    }
  } else {
    if (target >= nums[mid + 1] && target <= nums[last]) last = mid + 1;
    else first = mid + 1;
  }
}

console.log("target index", targetIndex);
