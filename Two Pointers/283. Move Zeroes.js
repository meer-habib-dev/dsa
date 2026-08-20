let nums = [2, 1];
let i = 0;
let j = 0;

while (j !== nums.length) {
  let a = nums[i];
  let b = nums[j];

  if (b === 0) {
    j++;
  } else {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
    i++;
    j++;
  }

  //   if (a === 0 && b !== 0) {
  //     let temp = nums[j];
  //     nums[j] = nums[i];
  //     nums[i] = temp;
  //     i++;
  //     j++;
  //   } else if (a === 0 && b === 0) {
  //     j++;
  //   } else if (a !== 0 && b === 0) {
  //     i++;
  //     j++;
  //   } else {
  //     j++;
  //   }
}
// let i = 0;
// let j = nums.length - 1;
// console.log(i, j);
// while (i < j) {
//   let a = nums[i];
//   let b = nums[j];

//   if (a === 0 && b !== 0) {
//     let temp = nums[j];
//     nums[j] = nums[i];
//     nums[i] = temp;
//     i++;
//     j--;
//   } else {
//     i++;
//   }
// }

console.log(nums);
