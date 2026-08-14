// let nums = [0, -1];

// if (nums.length === 1) console.log("1");

// let numSet = new Set(nums);
// let count = 0;
// let longest = 0;

// console.log("nums", numSet);
// // for (let i = 0; i < nums.length; i++) {
// //   numSet.add(nums[i]);
// // }

// for (let item of numSet) {
//   let num = item;
//   if (!numSet.has(num - 1)) {
//     console.log("num", num);
//     longest = count;
//     count = 1;

//     while (numSet.has(num + 1)) {
//       num = num + 1;
//       count++;
//       console.log("ssd", num, count);
//     }
//   }
//   longest = Math.max(longest, count);
// }

// console.log("cou", count, longest);
/**
 * @param {number[]} nums
 * @return {number}
 */

var longestConsecutive = function (nums) {
  let numSet = new Set(nums);
  let longest = 0;

  for (let item of numSet) {
    if (!numSet.has(item - 1)) {
      let num = item;
      let count = 1;

      while (numSet.has(num + 1)) {
        num++;
        count++;
      }

      longest = Math.max(longest, count);
    }
  }

  return longest;
};


/*

Why this stays O(n):

nums = [100, 4, 200, 1, 3, 2]

Set:
{100, 4, 200, 1, 3, 2}

For 4:

3 exists → not a start ❌

For 3:

2 exists → not a start ❌

For 2:

1 exists → not a start ❌

For 1:

0 doesn't exist → START ✅

1 → 2 → 3 → 4
length = 4

Each sequence is expanded only from its true starting point.

*/