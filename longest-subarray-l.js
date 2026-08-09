// let arr = [10, 5, 2, 7, 1, -10],
//   k = 15;
let arr = [10, 5, 2, 7, 1, -10, -5];
let k = 14;
let length = 0;
let sum = 0;
let map = new Map();

map.set(0, -1);

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];

  if (map.get(sum - k) && map.get(sum - k) < i) {
    length = i - map.get(sum - k);
  }

  map.set(sum, i);
}

console.log("length", length, map);
