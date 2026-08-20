let nums = [-4, -1, 0, 3, 10];

for (let i = 0; i < nums.length; i++) {
  let squired = nums[i] ** 2;
  nums[i] = squired;
}

console.log(nums.sort((a, b) => a - b));
