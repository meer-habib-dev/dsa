let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// let i = 0;
// let j = 0;

// let count = 0;
// while (j < nums.length) {
//   let a = nums[i];
//   let b = nums[j];

//   let nextUni = a;
//   if (a === b) {
//     j++;
//   } else {
//     i++;
//     let temp = nums[j];
//     nums[j] = nums[i];
//     nums[i] = temp;
//     count++;
//   }
// }
let i = 0;
let j = 0;

while (j < nums.length) {
  let a = nums[i];
  let b = nums[j];

  if (a === b) {
    j++;
  } else {
    i++;
    nums[i] = nums[j];
    j++;
  }
}

console.log(nums, i + 1);
