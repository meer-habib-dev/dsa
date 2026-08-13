/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let one = new Map();
  let two = new Map();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    one.set(s[i], (one.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    one.set(t[i], (one.get(t[i]) || 0) - 1);

    if (!one.has(t[i]) || one.get(t[i]) < 0) return false;
  }

  return true;
};
// Time:  O(n) ✅
// Space: O(n) ✅

// "How many times does X appear?"
//               ↓
//          Frequency Map
//               ↓
//        Map<X, frequency>
