let n = 19;

let seen = new Set();

while (n !== 1) {
  if (seen.has(n)) {
    return false;
  }
  seen.add(n);

  n = String(n)
    .split("")
    .reduce((s, digit) => s + Number(digit) ** 2, 0);
}
console.log("u", n, sum);

// console.log("re", sum, num, sumCount);


/*

Watch 19:

n = 19
seen = {19}

next:
1² + 9² = 82


n = 82
seen = {19, 82}

next:
8² + 2² = 68


n = 68
seen = {19, 82, 68}

next:
6² + 8² = 100


n = 100
seen = {19, 82, 68, 100}

next:
1² + 0² + 0² = 1


n === 1

return true ✅

Now look at an unhappy number:

2 → 4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4

When 4 appears the second time:

seen.has(4) === true

Therefore:

We're repeating a state.
↓
From here everything will repeat forever.
↓
return false

That's the core DSA lesson from this problem:

Repeated state / cycle
        ↓
"Have I seen this before?"
        ↓
Set
*/