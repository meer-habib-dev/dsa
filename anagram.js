function ana(s, t) {
  let one = new Map();
  let two = new Map();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    one.set(s[i], (one.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    two.set(t[i], (two.get(t[i]) || 0) + 1);
  }

  for (let [key, value] of one) {
    console.log("ss", key);
    if (one.get(key) !== two.get(key)) return false;
  }

  return true;
}

console.log("ans", ana("aacc", "ccac"));
