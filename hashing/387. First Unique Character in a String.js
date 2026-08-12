// LeetCode 387 — First Unique Character in a String

// Given:

// s = "leetcode"

// Return the index of the first character that appears only once.

// Output: 0

let s = "loveleetcode";

let frequency = new Map();
let index = new Map();

for (let i = 0; i < s.length; i++) {
  let currentValue = s[i];
  let count = (frequency.get(currentValue) || 0) + 1;

  frequency.set(currentValue, count);
  index.set(currentValue, i);
}

for (let [key] of frequency) {
  if (frequency.get(key) === 1) console.log("key", index.get(key));
}
console.log(" req", frequency);
