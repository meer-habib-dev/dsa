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

/*

Complexity

Even with two loops:

Pass 1: O(n)
Pass 2: O(n)

O(n) + O(n)
= O(2n)
= O(n) ✅

Remember this! Beginners sometimes think two loops automatically means O(n²).

for (...) {} // O(n)

for (...) {} // O(n)

is:

O(n + n) = O(2n) = O(n)

Whereas nested loops:

for (...) {
    for (...) {}
}

are generally:

O(n × n) = O(n²)
Pattern #4 — Count first, answer second

This is another common Hash Map pattern:

PASS 1
Build information
      ↓
character → frequency


PASS 2
Use that information
      ↓
find frequency === 1

*/
