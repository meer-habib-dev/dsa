// find the unique element;

const arr = [10, 2, 10, 2, 3, 4, 4];

const hash = new Set();

for (let item of arr) {
  if (hash.has(item)) {
    hash.delete(item);
  } else {
    hash.add(item);
  }
}

console.log(hash);
