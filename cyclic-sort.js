// let arr = [300, 100, 500, 400, 200];
// let i = 0;

// while (i < arr.length) {
//   let correctIdx = arr[i] - 1;
//   if (arr[i] !== arr[correctIdx])
//     [arr[i], arr[correctIdx]] = [arr[correctIdx], arr[i]];
//   else i++;
// }
// console.log(arr);

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let missingNums = [];
let i = 0;

while (i < nums.length) {
  let correctIndex = nums[i] - 1;

  if (nums[i] !== nums[correctIndex])
    [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
  else i++;
}

for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== i + 1) {
    nums[i] = i + 1;
    missingNums.push(nums[i]);
  }
}

console.log(nums);
console.log(missingNums);
