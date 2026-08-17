let nums = [0, 1, 0, 1];

let sum = 0;
let numsCount = new Map();
let sumCount = new Map();
let longest = 0;

sumCount.set(0, -1);

for (let i = 0; i < nums.length; i++) {
  numsCount.set(i, nums[i] === 0 ? -1 : nums[i]);
}

for (let i = 0; i < nums.length; i++) {
  sum += numsCount.get(i);

  if (sumCount.has(sum) && sumCount.get(sum) === 0) {
    let distance = i - sumCount.get(sum);
    longest = Math.max(longest, distance);
    console.log("long", longest, distance);
    continue;
  }

  sumCount.set(sum, i);
}

console.log("sumcount", longest, sumCount);
