let s = "ab##";
t = "c#d#";
let a = "";
let b = "";
for (let i = 0; i < s.length; i++) {
  let currentVal = s[i];
  let currentValb = t[i];

  if (currentVal === "#") {
    let c = s.slice(i - 1, i + 1);
    a = s.replace(c, "");
  }
}
for (let i = 0; i < t.length; i++) {
  let currentValb = t[i];

  if (currentValb === "#") {
    let d = t.slice(i - 1, i + 1);
    b = t.replace(d, "");
  }
}

console.log(a, b);
