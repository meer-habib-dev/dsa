let s = "foo",
  t = "bar";

let iso = new Map();
let osi = new Map();

for (let i = 0; i < s.length; i++) {

  if (iso.has(t[i]) && iso.get(t[i]) !== s[i]) {
    console.log("false");
  }
  if (iso.has(s[i]) && iso.get(s[i]) !== t[i]) {
    console.log("false");
  }

  iso.set(t[i], s[i]);
  iso.set(s[i], t[i]);
}

console.log("ios", iso);


/*

This is still O(n) time and O(n) space.

The pattern to remember is:

One-to-one mapping
      ↓
Map A → B
Map B → A

*/