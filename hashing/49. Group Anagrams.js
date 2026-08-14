/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let patternMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    let patternKey = strs[i].split("").sort().join("");
    if (!patternMap.has(patternKey)) {
      patternMap.set(patternKey, []);
    }

    patternMap.get(patternKey).push(strs[i]);
  }

  return [...patternMap.values()];
};

/*

nput: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Complexity

If:

n = number of strings
k = average string length

then sorting each string costs:

O(k log k)

and you do it n times:

Time: O(n × k log k)
Space: O(n × k)
Pattern learned

This is a very important Hash Map pattern:

Create a canonical key
        ↓
Different inputs with same meaning
produce same key
        ↓
Map<key, group>

Examples:

eat → aet
tea → aet
ate → aet

So this is grouping by signature.

*/
