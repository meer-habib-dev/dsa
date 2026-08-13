let ransomNote = "fihjjjjei",
  magazine = "hjibagacbhadfaefdjaeaebgi";

let count = new Map();

for (let i = 0; i < magazine.length; i++) {
  count.set(magazine[i], (count.get(magazine[i]) || 0) + 1);
}

for (let i = 0; i < ransomNote.length; i++) {
  let currentVal = ransomNote[i];
  if (!count.has(currentVal) || count.get(currentVal) === 0) {
    console.log("false");
  }
  count.set(currentVal, (count.get(currentVal) || 0) - 1);
}

console.log(count);

/*


I like this version because the mental model is very clean:

magazine = inventory

ransomNote = requests

for each request:
    do I have one available?

    no  → false
    yes → consume one
Pattern learned

This is another very useful Map pattern:

Available resources
        ↓
Map<item, quantity>

Then consume:

quantity--

If quantity is unavailable:
return false*/