let nums = [0, 1, 0, 1];

let sum = 0;

let sumCount = new Map();
let longest = 0;

sumCount.set(0, -1);

for (let i = 0; i < nums.length; i++) {
  sum += nums[i] === 0 ? -1 : 1;

  if (sumCount.has(sum)) {
    let distance = i - sumCount.get(sum);
    longest = Math.max(longest, distance);
  } else {
    sumCount.set(sum, i);
  }
}

console.log("sumcount", longest, sumCount);
