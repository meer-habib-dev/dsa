// - @param {number[]} nums
// - @return {boolean}
var containsDuplicate = function (nums) {
  const hash = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true;
    }

    hash.add(nums[i]);
  }

  return false;
};

// Question says:

// duplicate?
// already seen?
// does this exist?
// unique?

//         ↓

// Think → Hash Set
