// function pivotIndex(arr, first, last) {
//   let pivot = arr[first];
//   let i = first + 1,
//     j = last;

//   while (i <= j) {
//     while (i <= last && arr[i] <= pivot) i++;
//     while (j >= first && arr[j] > pivot) j--;
//     if (i < j) {
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     } else {
//       break;
//     }
//   }
//   [arr[first], arr[j]] = [arr[j], arr[first]];
//   return j;
// }

// function quickSort(arr, first, last) {
//   if (first >= last) {
//     return;
//   }
//   let pvtIdx = pivotIndex(arr, first, last);
//   quickSort(arr, first, pvtIdx - 1);
//   quickSort(arr, pvtIdx + 1, last);
// }

// let arr = [10, 7, 8, 9, 1, 5];
// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[arr.length - 1];

  let smaller = [],
    larger = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) smaller.push(arr[i]);
    else larger.push(arr[i]);
  }

  return [...quickSort(smaller), pivot, ...quickSort(larger)];
}

let arr = [10, 7, 8, 9, 1, 5];
console.log(quickSort(arr));
