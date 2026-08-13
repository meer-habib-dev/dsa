// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

let nums = [2, 2, 1, 1, 1, 2, 2];

   let ele = new Map();
   let majEle = 0;

   for (let i = 0; i < nums.length; i++) {
     let currentVal = nums[i];
     let storedValue = ele.get(currentVal);
     ele.set(currentVal, (storedValue || 0) + 1);

     let tLength = nums.length / 2;
     storedValue = ele.get(currentVal);
     if (storedValue > tLength) {
       majEle = currentVal;
     }
   }

   return majEle;

console.log("ele", ele, maj);


/*

Complexity
Time:  O(n) ✅
Space: O(n) ✅

Later we'll revisit this problem and get:

Time:  O(n)
Space: O(1) 🔥

using Boyer–Moore Voting.

But don't learn that yet. Right now we're training Hash Maps.

Pattern reinforced

You're starting to see the repetition:

Need to COUNT something?

        ↓

Map

item → frequency

*/ 