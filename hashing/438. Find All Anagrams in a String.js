let s = "cbaebabacd",
  p = "abc";

// first indice;
let pLength = p.length;
let result = [];
let pSort = p.split("").sort().join("");
for (let i = 0; i <= s.length - pLength; i++) {
  let matchAna = s
    .slice(i, i + pLength)
    .split("")
    .sort()
    .join("");

  if (pSort === matchAna) {
    result.push(i);
  }
}
console.log("match", freq, result);
