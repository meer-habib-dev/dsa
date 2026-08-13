let arr = [1, 2];

let freq = new Map();
let unique = new Set();

for (let i = 0; i < arr.length; i++) {
  let currentValue = arr[i];

  freq.set(currentValue, (freq.get(currentValue) || 0) + 1);
}

for (let [key] of freq) {
  if (unique.has(freq.get(key))) {
    console.log("false");
  }

  unique.add(freq.get(key));
}

console.log(freq, unique);
