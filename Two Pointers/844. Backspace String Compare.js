// let s = "ab##c";
// t = "c#d#";
// let i = s.length - 1;
// let j = t.length - 1;

// let skipS = 0;
// let skipT = 0;

// while (i >= 0 || j >= 0) {
//   let currentVal = s[i];
//   let currentValJ = t[j];
//   if (currentVal === "#") {
//     skipS++;
//   } else if (skipS > 0) {
//     skipS--;
//   } else {
//     s = s[i];
//     break;
//   }

//   if (currentValJ === "#") {
//     skipT++;
//   } else if (skipT > 0) {
//     skipT--;
//   } else {
//     t = t[j];
//     break;
//   }

//   if (s[i] !== t[j]) {
//     console.log("false");
//   }
//   i--;
//   j--;
// }

// console.log(skipT, skipS);
// // for (let i = 0; i < s.length; i++) {
// //   let currentVal = s[i];
// //   let currentValb = t[i];

// //   if (currentVal === "#") {
// //     let c = s.slice(i - 1, i + 1);
// //     a = s.replace(c, "");
// //   }
// // }
// // for (let i = 0; i < t.length; i++) {
// //   let currentValb = t[i];

// //   if (currentValb === "#") {
// //     let d = t.slice(i - 1, i + 1);
// //     b = t.replace(d, "");
// //   }
// // }

let s = "xywrrmp",
  t = "xywrrmu#p";

let strOne = "";
let strTwo = "";

let i = s.length - 1;
let j = t.length - 1;

let count = 0;
let countJ = 0;

while (i >= 0 || j >= 0) {
  let currentVal = s[i];
  let currentValJ = t[j];

  if (currentVal === "#") {
    count++;
  } else if (count > 0) {
    count--;
  } else if (i >= 0) {

    strOne = strOne += currentVal;
  }

  if (currentValJ === "#") {
    countJ++;
  } else if (countJ > 0) {
    countJ--;
  } else {
    strTwo = strTwo += currentValJ;
  }

  j--;
  i--;
}

console.log("s", strOne, strTwo);
