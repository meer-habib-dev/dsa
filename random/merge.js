// function concur(arr, first, last, mid) {
//   let temp = new Array(last - first + 1);
//   let i = first,
//     j = mid + 1,
//     k = 0;

//   while (i <= mid && j <= last) {
//     if (arr[i] < arr[j]) {
//       temp[k++] = arr[i++];
//     } else {
//       temp[k++] = arr[j++];
//     }
//   }

//   while (i <= mid) {
//     temp[k++] = arr[i++];
//   }
//   while (j <= last) {
//     temp[k++] = arr[j++];
//   }

//   let p = 0,
//     t = first;

//   while (p < temp.length) {
//     arr[t++] = temp[p++];
//   }
//   console.log("temp", temp);
// }

// function divide(arr, first, last) {
//   if (first >= last) return;
//   let mid = Math.floor((first + last) / 2);

//   console.log("f", first, last, mid);
//   divide(arr, first, mid);
//   divide(arr, mid + 1, last);
// //   concur(arr, first, last, mid);
// }

// let arr = [1, 9, 10, 3, 2, 6, 4, 5];

// divide(arr, 0, arr.length - 1);
// console.log("排序后", arr);

let arr = [8, 3, 5, 1];

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  const leftArray = mergeSort(left);
  const rightArray = mergeSort(right);

  return merge(leftArray, rightArray);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  while (i < left.length) {
    result.push(left[i++]);
  }

  while (j < right.length) {
    result.push(right[j++]);
  }

  return result;
}

console.log(mergeSort(arr));
