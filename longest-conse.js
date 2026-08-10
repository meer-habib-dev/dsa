// let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

// let count = 1;
// let longest = 0;
// arr.sort((a, b) => a - b);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i - 1]) continue;
//   else if (arr[i] === arr[i - 1] + 1) count++;
//   else {
//     count = 1;
//   }
//   console.log("l", longest, count);
//   longest = Math.max(longest, count);
// }
// console.log("arr", arr, count, longest);
let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let set = new Set(arr);
let count = 0;
let longest = 0;

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  if (set.has(value + count)) {
    while (set.has(value + count)) {
      count++;
    }
  } else {
    count = 1;
  }
  longest = Math.max(longest, count);
}

console.log("arr", count, longest);
