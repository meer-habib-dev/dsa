let arr = [1, 2];

let freq = new Map();
let unique = new Set();

for (let i = 0; i < arr.length; i++) {
  let currentValue = arr[i];

  freq.set(currentValue, (freq.get(currentValue) || 0) + 1);
}

for (let count of freq.values()) {
  if (unique.has(value)) {
    console.log("false");
  }

  unique.add(value);
}

console.log(freq, unique);



/*

Complexity
Build frequency Map → O(n)
Check frequencies    → O(k)

k = number of unique elements
k <= n

Total → O(n) ✅
Space → O(n) ✅
🧠 Important pattern you just learned

This problem has two layers:

Original data
    ↓
Map
    ↓
number → frequency
    ↓
Take Map values
    ↓
Set
    ↓
Are the frequencies unique?
*/