let numbers = [2, 3, 4],
  target = 6;
let i = 0;
let j = numbers.length - 1;

// while (i < j) {
//   let a = numbers[i];
//   let b = numbers[j];

//   let sum = a + b;
//   console.log(sum, a);
//   if (sum === target) {
//     return [i + 1, j + 1];
//   } else if (j === numbers.length - 1) {
//     i++;
//     j = i + 1;
//   } else {
//     j++;
//   }
// }

while (i < j) {
  let a = numbers[i];
  let b = numbers[j];
  let sum = a + b;

  if (sum === target) {
    console.log([a + 1, b + 1]);
    return;
  } else {
    sum > target ? j-- : i++;
  }
}
return [];
