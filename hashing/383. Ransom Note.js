let ransomNote = "fihjjjjei",
  magazine = "hjibagacbhadfaefdjaeaebgi";

let count = new Map();

for (let i = 0; i < ransomNote.length; i++) {
  count.set(ransomNote[i], (count.get(ransomNote[i]) || 0) + 1);
}

for (let i = 0; i < magazine.length; i++) {
  let currentVal = magazine[i];
  if (count.has(currentVal) && count.get(currentVal) !== 0) {
    count.set(currentVal, (count.get(currentVal) || 0) - 1);
  }
}

for (let [key] of count) {
  if (count.get(key) !== 0) console.log("false");
}

console.log(count);
