let num = [10, 5, 1, 12, 3];
let l = num.length;

for (let i = 0; i < l - 1; i++) {
  let minL = i;

  for (let j = i + 1; j < l; j++) {
    if (num[minL] > num[j]) {
      minL = j;
    }
  }

  if (minL != i) {
    let temp = num[i];
    num[i] = num[minL];
    num[minL] = temp;
  }
}
console.log("num", num);
