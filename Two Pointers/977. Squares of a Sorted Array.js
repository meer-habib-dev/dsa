// let nums = [-5, -3, -2, -1];

// let i = 0;
// let j = nums.length - 1;

// for (let i = 0; i < nums.length; i++) {
//   let squired = nums[i] ** 2;
//   nums[i] = squired;
// }

// console.log(nums);
// while (i <= j) {
//   let a = nums[i];
//   let b = nums[j];

//   if (a > b) {
//     let temp = nums[j];
//     nums[j] = nums[i];
//     nums[i] = temp;
//     j--;
//   } else if (i + 1 === j) {
//     i++;
//   } else {
//     j--;
//   }
// }

// console.log(nums);

let nums = [-4, -1, 0, 3, 10];

let result = new Array(nums.length);

let i = 0;
let j = nums.length - 1;
let write = nums.length - 1;

while (i <= j) {
  let a = nums[i] ** 2;
  let b = nums[j] ** 2;

  if (a > b) {
    result[write] = a;
    i++;
  } else {
    result[write] = b;
    j--;
  }
  write--;
}
console.log("res", result);
