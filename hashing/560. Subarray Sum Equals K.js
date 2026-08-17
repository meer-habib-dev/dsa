// let nums = [1, 2, 3],
//   k = 3;

// let sumCount = new Map();
// sumCount.set(0, 1);
// let sum = 0;
// let size = 0;

// for (let i = 0; i < nums.length; i++) {
//   sum += nums[i];

//   if (sumCount.has(sum - k)) {
//     sumCount.set(sum - k, (sumCount.get(sum - k) || 0) + 1);
//   }

//   sumCount.set(sum, 1);
// }

// console.log("sum", sum, size, sumCount);

let nums = [0, 0, 3],
  k = 3;

let sumCount = new Map();
let count = 0;
let sum = 0;
sumCount.set(0, 1);

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];

  if (sumCount.has(sum - k)) {
    count += sumCount.get(sum - k);
  }

  sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
}

console.log("count", count, sumCount);
