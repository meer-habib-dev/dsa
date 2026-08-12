// let a = 20;
// let b = 32;

// for (let i = a; i >= 1; i--) {
//   if (a % i === 0 && b % i === 0) {
//     console.log("i", i);
//   }
// }

// while (a != b) {
//   if (a > b) a = a - b;
//   else if (b > a) b = b - a;

//   console.log("a", a);
// }

// console.log("a", a);

// function gcb(a, b) {
//   if (a === b) return a;
//   if (a > b) return gcb(a - b, b);
//   return gcb(a, b - a);
// }

// console.log("g", gcb(a, b));

// function gcb(a, b) {
//   if (b === 0) return a;
//   console.log("a % b", a, b, a % b);
//   return gcb(b, a % b);
// }

// let a = 36;
// let b = 20;
// console.log(gcb(a, b));

// console.log(Math.sqrt(100));

// let n = 100;

// for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (n % i === 0) console.log(i);
// }

// let n = 30;
// let arr = new Array(n + 1).fill(true);

// for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//   if (arr[i] === true) {
//     for (let j = i * i; j <= n; j += i) {
//       console.log("text", j, i * i, j <= n, (j += i));
//       arr[j] = false;
//     }
//   }
// }

// for (let i = 2; i <= arr.length; i++) {
//   if (arr[i]) console.log(i);
// }

// console.log(" Math.floor(Math.sqrt(n))", Math.floor(Math.sqrt(n)));

const x = 2;
const n = 10;

function power(x, n) {
  if (n === 0) return 1;

  let ans = cal(x, n);

  return n < 0 ? 1 / ans : ans;
}

function cal(x, n) {
  if (n === 0) return 1;

  let ans = cal(x, parseInt(n / 2));
  if (n % 2 === 0) return ans * ans;
  return ans * ans * x;
}
console.log("h", power(x, n));
