// // // // find the unique element;

// // // const arr = [10, 2, 10, 2, 3, 4, 4];

// // // const hash = new Set();

// // // for (let item of arr) {
// // //   if (hash.has(item)) {
// // //     continue;
// // //   } else {
// // //     hash.add(item);
// // //   }
// // // }

// // // console.log(hash);

// // // pangram;

// // // const str = "thequickbrownfoxjumpsoverthelazydog";

// // // // const has = new Set(str);
// // // let has = new Set();

// // // for (let i = 0; i < str.length; i++) {
// // //   has.add(str.charAt(i));
// // // }

// // // console.log("has", has.size);

// // // check the frequency of the element in the array;

// // const arr = [2, 2, 3, 4, 4, 4, 10, 8, 9, 10];

// // const hash = new Map();

// // for (let item of arr) {
// //   if (hash.has(item)) {
// //     hash.set(item, hash.get(item) + 1);
// //   } else {
// //     hash.set(item, 1);
// //   }
// // }

// // console.log(hash);

// let names = ["Mary", "John", "Emma"],
//   heights = [180, 165, 170];
// let hash = new Map();

// let i = 0;
// let j = heights.length - 1;

// for (let i = 0; i < heights.length; i++) {
//   hash.set(heights[i], names[i]);
// }
// heights.sort((a, b) => b - a);

// for (let i = 0; i < heights.length; i++) {
//   names[i] = hash.get(heights[i]);
// }

// console.log(hash, heights, names);

let nums = [3, 2, 4];
target = 6;

let hash = new Map();

for (let i = 0; i < nums.length; i++) {
  if (hash.has(target - nums[i])) {
    return [i, hash.get(target - nums[i])];
  } else {
    hash.set(nums[i], i);
  }
}

console.log(" nums.indexOf(7);", indexes);
