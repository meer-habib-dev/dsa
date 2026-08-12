let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

let numsOne = new Set(nums1);
let result = new Set();

for (let i = 0; i < nums2.length; i++) {
  if (numsOne.has(nums2[i])) {
    result.add(nums2[i]);
  }
}

console.log("arr", [...result]);
