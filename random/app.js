// console.log("Hello World");

// // question: utility bill: up to 100, 4.2; 101-200, 6; 201-400,8; 400+, 13;

// let unit = 123;

// const bill = (unit - 400) * 13 + (400 - 200) * 8 + (200 - 100) * 6 + 100 * 4.2;
// console.log(bill);

// // sec solution

// let bill2 = 0;

// if (unit > 400) {
//   bill2 = (unit - 400) * 13;
//   unit = 400;
// }

// if (unit > 200 && unit <= 400) {
//   bill2 = bill2 + (unit - 200) * 8;
//   unit = 200;
// }

// if (unit > 100 && unit <= 200) {
//   bill2 = bill2 + (unit - 100) * 6;
//   unit = 100;
// }

// bill2 += unit * 4.2;

// console.log(bill2);

const prompt = require("prompt-async");

async function main() {
  //   prompt.start();

  //   const { number } = await prompt.get({
  //     properties: {
  //       number: {
  //         description: "Enter a number",
  //         required: true,
  //       },
  //     },
  //   });

  //   const n = Number(number);

  //   for (let d = 1; d <= n; d++) {
  //     for (let i = 1; i <= n; i++) {
  //       process.stdout.write("* ");
  //     }
  //     console.log();
  //   }

  //   const n = 50;
  //   for (let i = 1; i <= n; i++) {
  //     for (j = 1; j <= i; j++) {
  //       process.stdout.write("*");
  //     }
  //     console.log("");
  //   }
  //   const n = 5;
  //   for (let i = 1; i <= n; i++) {
  //     for (j = 1; j <= i; j++) {
  //       process.stdout.write(j + " ");
  //     }
  //     console.log("");
  //   }
  //   const n = 5;
  //   for (let i = 1; i <= n; i++) {
  //     let ascii = 65;
  //     for (j = 1; j <= i; j++) {
  //       process.stdout.write(String.fromCharCode(ascii) + " ");
  //       ascii++;
  //     }
  //     console.log("");
  //   }
  //   const n = 5;
  //   for (let i = 1; i <= n; i++) {
  //     let ascii = 65;
  //     for (j = 1; j <= i; j++) {
  //       process.stdout.write(String.fromCharCode(ascii) + " ");
  //       ascii++;
  //     }
  //     console.log("");
  //   }

  //   let n = 5;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = n; j >= i; j--) {
  //       process.stdout.write("*");
  //     }
  //     console.log();
  //     if (i === 0) break;
  //   }
  //   let n = 5;
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n - i + 1; j++) {
  //       process.stdout.write("*");
  //     }
  //     console.log();
  //     if (i === 0) break;
  //   }
  //   let n = 50;
  //   for (let i = n; i <= n; i--) {
  //     for (let j = 1; j <= i; j++) {
  //       process.stdout.write("*");
  //     }
  //     console.log();
  //     if (i === 0) break;
  //   }

  //   let n = 5;

  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n - i; j++) {
  //       process.stdout.write(" ");
  //     }
  //     for (let k = 1; k <= i; k++) {
  //       process.stdout.write("*");
  //     }

  //     console.log();
  //   }

  //   let n = 5;

  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n; j++) {
  //       if (i == j || i + j == n + 1) {
  //         process.stdout.write("*");
  //       } else {
  //         process.stdout.write(" ");
  //       }
  //     }
  //     console.log();
  //   }

  let n = 5;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n * 2 - 1; j++) {
      if (i === j || i + j === 2 * n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

main().catch(console.error);
