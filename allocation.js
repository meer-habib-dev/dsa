// let books = [12, 34, 67, 90];
// let k = 2;
// let first = 0;
// let last = 0;
// let ans = -1;

// if (k > books.length) {
//   return -1;
// }

// for (let i = 0; i < books.length; i++) {
//   first = Math.max(books[i], first);
//   last += books[i];

//   while (first <= last) {
//     let mid = Math.floor((first + last) / 2);

//     if (isValid(books, mid, k)) {
//       ans = mid;
//       last = mid - 1;
//     } else {
//       first = mid + 1;
//     }
//   }
//   return ans;
// }

// function isValid(arr, mid, k) {
//   let sum = 0;
//   let numberOfStudents = 1;

//   for (let i = 0; i < arr.length; i++) {
//     if (sum + arr[i] > mid) {
//       numberOfStudents++;
//       sum = arr[i];
//       if (numberOfStudents > k) {
//         return false;
//       }
//     } else {
//       sum += arr[i];
//     }
//   }
//   return numberOfStudents <= k;
// }
// console.log("Answer is", ans);

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function isValid(pages, mid, k) {
  let sum = 0;
  let numsOfStudent = 1;

  for (let page of pages) {
    if (sum + page <= mid) {
      sum += page;
    } else {
      numsOfStudent++;
      sum = page;
    }
  }
  console.log("numsOfStudent", sum);

  return numsOfStudent <= k;
}

function findPages(arr, k) {
  // code here
  if (k > arr.length) return -1;
  let low = Math.max(...arr);
  let high = arr.reduce((sum, page) => sum + page, 0);

  console.log("low", low, high);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (isValid(arr, mid, k)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return low;
}

console.log("Answer is", findPages([12, 34, 67, 90], 2));
