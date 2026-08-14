let nums = [4, 1, -1, 2, -1, 2, 3];
k = 2;

let freq = new Map();

for (let i = 0; i < nums.length; i++) {
  freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
}

let res = [];

let value = [...freq.values()];
let sortedVaue = value.sort((a, b) => b - a).splice(0, k);

for (let [key, value] of freq) {
  if (sortedVaue.includes(freq.get(key))) {
    res.push(key);
  }
}

console.log("or", res);

// console.log(
//   freq,
//   [...freq.keys()].sort(),
//   [...freq.keys()].sort().splice(0, k),
// );
