// // sum of n
// const n = 20;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += i;
//   //   console.log("h", sum);
// }
// // console.log(sum, n);

// // factorial of n

// const fn = 4;
// let fact = 1;
// for (let i = 1; i <= fn; i++) {
//   fact *= i;
// }
// // console.log(fact, fn);

// const nli = 1312415;

// for (let i = 1; i <= nli / 2; i++) {
//   if (nli % i === 0) {
//     // console.log(i);
//   }
// }

// // prime number
// const p = 1;

// let isPrime = true;
// if (p === 1) {
//   isPrime = false;
// }
// for (let i = 2; i <= p; i++) {
//   if (p % i === 0) {
//     isPrime = false;
//     console.log(isPrime);
//     break;
//   }
// }

// // prime number function
// const isPrimeFn = (n) => {
//   if (n <= 1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;

//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// sum of numbers

// let n = 1234;
// let sum = 0;

// while (n > 0) {
//   const rem = n % 10;
//   console.log(rem);
//   sum += rem;
//   console.log(sum);
//   n = Math.floor(n / 10);
//   console.log("end", n);
// }
// console.log(sum);

// reverse of a number;

// let n = 1234;
// let rev = 0;

// while (n > 0) {
//   let rem = n % 10;
//   rev = rev * 10 + rem;
//   n = Math.floor(n / 10);
// }

// console.log("rev", rev);

// let n = 2;
// let sum = 0;
// let copy = n;

// while (n > 0) {
//   const rem = n % 10;
//   let fact = 1;
//   for (let i = 1; i <= rem; i++) {
//     fact *= i;
//   }
//   sum += fact;

//   n = Math.floor(n / 10);
// }

// if (copy === sum) {
//   console.log("strong number");
// } else {
//   console.log("Not a strong number");
// }
// console.log("n,su", n, sum);

// guess the number;

// let random = Math.floor(Math.random() * 100) + 1;

// let userGuess = -1;

// while (userGuess !== random) {
//   userGuess = Number(prompt("give me the b/w 1-100"));
//   console.log("uesr", userGuess);
//   if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
//     console.log("mda");
//     continue;
//   }

//   if (userGuess > random) {
//     console.log("too high");
//   } else if (userGuess < random) {
//     console.log("too low");
//   } else if (userGuess === random) {
//     console.log("behencod");
//   }
// }
const random = Math.floor(Math.random() * 100) + 1;

let userGuess;

while (userGuess !== random) {
  const input = prompt("Enter a number between 1 and 100:");

  if (input === null) {
    console.log("Game cancelled");
    break;
  }

  userGuess = Number(input);

  if (Number.isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    console.log("Please enter a valid number between 1 and 100");
    continue;
  }

  if (userGuess > random) {
    console.log("Too high");
  } else if (userGuess < random) {
    console.log("Too low");
  } else {
    console.log("Correct!");
  }
}
