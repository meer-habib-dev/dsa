function ctx() {
  let nums = [3, 2, 4],
    target = 6;
  let indices = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (indices.has(target - nums[i])) {
      let idx = [i, indices.get(target - nums[i])];
      console.log("idex", idx);
    }
    indices.set(nums[i], i);
  }
  console.log("ind", indices);
}
console.log("i", ctx());
