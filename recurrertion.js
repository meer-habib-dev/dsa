// let i = 0;
// function temp(n) {
//   if (n === 0) return;
//   console.log("b", n);
//   temp(--n);
//   console.log(n);
// }

// temp(5);

// function sum(n) {
//   if (n === 1) return n;

//   return n * sum(n - 1);
// }

// console.log(sum(5));

// let n = 10;
// let first = 0,
//   second = 1,
//   third = 0;

// for (let i = 1; i <= n - 2; i++) {
//   third = first + second;
//   first = second;
//   second = third;

//   console.log(third);
// }

// function fib(n, first, second) {
//   if (n === 0) return;

//   let third = first + second;
//   console.log("thr", third);
//   fib(n - 1, second, third);
// }

// let n = 10;

// fib(n - 2, 0, 1);

// function fib(n) {
//   if (n === 0 || n === 1) return n;

//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(7));
