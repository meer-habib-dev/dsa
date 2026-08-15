// function create() {
//   let count = 0;
//   return function incre() {
//     count++;
//     console.log("count", count);
//   };
// }
// const counter = create();
// counter();
// counter();
// counter();

// function outer() {
//   const hello = "hello from meer";

//   function inner() {
//     console.log(hello);
//   }

//   return inner;
// }

// const out = outer()();

function createBankAccount(initialBal) {
  let bal = initialBal;

  return {
    createDeposit(newB) {
      return (bal += newB);
    },
    withdraw(newB) {
      return (bal -= newB);
    },
    getBal() {
      return bal;
    },
  };
}

const userBankInfo = createBankAccount(1000);

console.log("a", userBankInfo.createDeposit(500));
console.log("a", userBankInfo.withdraw(200));
console.log("a", userBankInfo.getBal());
