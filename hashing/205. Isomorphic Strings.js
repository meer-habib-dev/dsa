let s = "foo",
  t = "bar";

let iso = new Map();
let osi = new Map();

for (let i = 0; i < s.length; i++) {
  if (iso.has(t[i]) && iso.get(t[i]) !== s[i]) {
    console.log("false");
  }

  iso.set(t[i], s[i]);
}

for (let i = 0; i < t.length; i++) {
  if (iso.has(s[i]) && iso.get(s[i]) !== t[i]) {
    console.log("false");
  }

  iso.set(s[i], t[i]);
}

console.log("ios", iso);
