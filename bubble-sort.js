let num = [10, 5, 1, 12, 3];
let outerL = num.length - 1;

for (let i = 0; i < outerL; i++) {
  for (let j = 0; j < outerL - i; j++) {
    console.log("jjjj", outerL, j, i);
    if (num[j] > num[j + 1]) {
      let temp = num[j];
      num[j] = num[j + 1];
      num[j + 1] = temp;
    }
  }
}
console.log("num", num);
