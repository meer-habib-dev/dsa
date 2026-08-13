/*

- @param {number[]} nums
- @param {number} target
- @return {number[]}
*/
var twoSum = function (nums, target) {
  let indices = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (indices.has(target - nums[i])) {
      return [indices.get(target - nums[i]), i];
    }

    indices.set(nums[i], i);
  }

  return [];
};

//   Time:  O(n) ✅
// Space: O(n) ✅

// "I need two things to complete a target"

// current = nums[i]

// need = target - current

//         ↓

// Have I seen `need`?

//         ↓

// Hash Map / Set

// Only need existence?
// → Set

// Need information about it?
// → Map

// Two Sum needs the INDEX
// → number → index
