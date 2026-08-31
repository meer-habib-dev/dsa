let nums = [-1, 0, 1, 2, -1, -4].sort((a, b) => a - b);
// [[-1,0,1],[0,1,-1]]
//  [ -4, -1, -1, 0, 1, 2 ]
let i = 0;
let left = i + 1;
let right = nums.length - 1;

let array = [];

while (i < right) {
  let a = nums[i];
  let b = nums[left];
  let c = nums[right];

  let sum = a + b + c;
  console.log(sum);

  if (sum === 0) {
    array.push([a, b, c]);
    i++;
    left = i + 1;
    right = nums.length - 1;
  } else if (sum > 0) {
    right--;
  } else {
    left++;
  }

  //   else {
  //     i++;
  //     left = i + 1;
  //     right = nums.length - 1;
  //   }
}

console.log(array);
