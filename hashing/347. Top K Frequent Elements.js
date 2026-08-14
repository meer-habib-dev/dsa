let nums = [4, 1, -1, 2, -1, 2, 3];
k = 2;

let freq = new Map();

for (let i = 0; i < nums.length; i++) {
  freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
}

let entries = [...freq.entries()];
entries.sort((a, b) => b[1] - a[1]);

let r = entries.slice(0, k).map(([a]) => a);

console.log("or", r);

/*

the flow is:

Map

1 → 3
2 → 2
3 → 1

↓

Entries

[[1,3], [2,2], [3,1]]

↓

Sort descending by frequency

[[1,3], [2,2], [3,1]]

↓

Take first k = 2

[[1,3], [2,2]]

↓

Extract numbers

[1,2] ✅
Complexity

If there are m unique numbers:

Build Map:     O(n)
Sort entries:  O(m log m)

Total:         O(n + m log m)
Worst case:    O(n log n)

Space:         O(n)

*/
