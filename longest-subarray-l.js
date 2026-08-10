// let arr = [10, 5, 2, 7, 1, -10],
//   k = 15;
// Longest Subarray with Sum K
let arr = [1, 5, 4, 2, 9, 9, 9],
  k = 3;

let length = 0;
let sum = 0;
let map = new Map();

map.set(0, -1);

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  let requiredSum = sum - k;

  if (map.has(requiredSum)) {
    let currentLength = i - map.get(requiredSum);
    length = Math.max(currentLength, length);
  }
  if (!map.has(sum)) map.set(sum, i);
}

console.log("length", length, map);
