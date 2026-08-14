let pattern = "jquery",
  s = "jquery";

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let pMap = new Map();
  let sMap = new Map();
  let sArray = s.split(" ");

  if (pattern.length !== sArray.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    let currentKey = pattern[i];
    let currentValue = sArray[i];
    let currentKeyS = sArray[i];
    let currentValueP = pattern[i];

    if (pMap.has(currentKey) && pMap.get(currentKey) !== currentValue)
      return false;
    if (sMap.has(currentKeyS) && sMap.get(currentKeyS) !== currentValueP)
      return false;

    pMap.set(currentKey, currentValue);
    sMap.set(currentKeyS, currentValueP);
  }

  return true;
};

/*
Complexity:

Time: O(n)
Space: O(n)

And the pattern is now very clear:

One-to-one relationship
      ↓
Map A → B
Map B → A

*/
