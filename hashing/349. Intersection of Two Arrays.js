var intersection = function (nums1, nums2) {
  const numsOne = new Set(nums1);
  const result = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (numsOne.has(nums2[i])) {
      result.add(nums2[i]);
    }
  }

  return [...result];
};

/*
Create Set from nums1: O(n)
Loop through nums2:    O(m)
Set.has():             O(1) average
Set.add():             O(1) average

Total: O(n + m) ✅
Space: O(n + m) worst case

❌ array.includes(x) → O(n)
❌ array.indexOf(x)  → O(n)

✅ set.has(x)        → O(1) average
✅ map.has(x)        → O(1) average


1. Contains Duplicate
   Set → have I seen it?

2. Valid Anagram
   Map → frequency counting

3. Two Sum
   Map → value → index / complement lookup

4. Intersection of Two Arrays
   Set → fast membership + uniqueness
   
   */