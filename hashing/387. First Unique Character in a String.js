// LeetCode 387 — First Unique Character in a String

// Given:

// s = "leetcode"

// Return the index of the first character that appears only once.

// Output: 0

let s = "loveleetcode";

let frequency = new Map();

for (let i = 0; i < s.length; i++) {
  let currentValue = s[i];
  let count = (frequency.get(currentValue) || 0) + 1;

  frequency.set(currentValue, count);
}

for (let i = 0; i < s.length; i++) {
  if (frequency.get(s[i]) === 1) console.log("key", i);
}
console.log(" req", frequency);
