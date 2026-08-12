let nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

let arr = [];
let numsOne = new Set(nums1);

for (let i = 0; i < nums2.length; i++) {
  if (numsOne.has(nums2[i]) && !arr.includes(nums2[i])) {
    arr.push(nums2[i]);
  }
}

console.log("arr", arr);
