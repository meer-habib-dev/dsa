// let nums = [3, 3, 2, 2],
//   val = 3;
let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;

let i = 0;
let j = 0;

while (j < nums.length) {
  let a = nums[i];
  let b = nums[j];

  if (val === b) {
    j++;
  } else {
    nums[i] = nums[j];
    i++;
    j++;
  }
}

console.log("nus", nums, i);
