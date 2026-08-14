// let nums1 = [1, 2],
//   nums2 = [-2, -1],
//   nums3 = [-1, 2],
//   nums4 = [0, 2];
let nums1 = [-1, -1],
  nums2 = [-1, 1],
  nums3 = [-1, 1],
  nums4 = [1, -1];
let count = 0;

// for (let i = 0; i < nums1.length; i++) {
//   for (let j = 0; j < nums1.length; j++) {
//     for (let k = 0; k < nums1.length; k++) {
//       for (let l = 0; l < nums1.length; l++) {
//         let sum = nums1[i] + nums2[j] + nums3[k] + nums4[l];

//         if (sum === 0) {
//           count++;
//         }
//       }
//     }
//   }
// }

let freq = new Map();

for (let i = 0; i < nums1.length; i++) {
  for (let j = 0; j < nums2.length; j++) {
    let sum = nums1[i] + nums2[j];
    freq.set(sum, (freq.get(sum) || 0) + 1);
  }
}
for (let i = 0; i < nums3.length; i++) {
  for (let j = 0; j < nums4.length; j++) {
    let sum = nums3[i] + nums4[j];

    let need = -sum;

    if (freq.has(need)) {
      count += freq.get(need);
    }
  }
}

console.log("count", freq, count);
