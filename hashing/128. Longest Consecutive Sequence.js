let nums = [0, -1];

if (nums.length === 1) console.log("1");

let numSet = new Set(nums);
let count = 0;
let longest = 0;

console.log("nums", numSet);
// for (let i = 0; i < nums.length; i++) {
//   numSet.add(nums[i]);
// }

for (let item of numSet) {
  let num = item;
  if (!numSet.has(num - 1)) {
    console.log("num", num);
    longest = count;
    count = 1;

    while (numSet.has(num + 1)) {
      num = num + 1;
      count++;
      console.log("ssd", num, count);
    }
  }
  longest = Math.max(longest, count);
}

console.log("cou", count, longest);
