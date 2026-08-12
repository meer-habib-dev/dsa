let arr = [10, 5, 1, 12, 3];
let l = arr.at.length;

for (let i = 1; i < arr.length; i++) {
  let key = arr[i];
  let j = i - 1;

  console.log("j", j);

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    arr[j] = key;
    j--;
    console.log("j--", j);
  }
}

console.log("arr", arr);
