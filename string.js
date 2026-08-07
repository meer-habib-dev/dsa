// let string = "assa";

// // console.log(string.slice(0,string.length))
// // console.log(string.substring(5))

// let rev = "";

// // for (let i = string.length; i >= 0; i--) {
// //   rev = rev + string.charAt(i);
// // }

// // if (string === rev) return console.log("pallindrome");
// // else return console.log("no pollindrome");

// let i = 0;
// let j = string.length - 1;
// let isPallindrome = true;

// // while (i < j) {
// //   if (string.charAt(i) === string.charAt(j)) {
// //     console.log("match");
// //     i++;
// //     j--;
// //   } else {
// //     console.log("no pallindrome");
// //   }
// // }

// while (i < j) {
//   if (string.charAt(i) !== string.charAt(j)) {
//     isPallindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }

// if (isPallindrome) console.log(" pallindrome");
// else console.log("no pallindrome");

// let s = "ADBdsfwerASA";
// let toggle = "";

// for (let i = 0; i < s.length - 1; i++) {
//   let cat = s.charCodeAt(i);

//   if (cat >= 65 && cat <= 90) {
//     toggle = toggle + String.fromCharCode(cat + 32);
//   } else if (cat >= 97 && cat <= 122) {
//     toggle = toggle + String.fromCharCode(cat - 32);
//   }
// }

// console.log("t", toggle);

let s = "abba";

let ascii = new Array(128).fill(0);

let count = 0;

for (let i = 0; i < s.length; i++) {
  let cAt = s.charCodeAt(i);

  ascii[cAt] = ascii[cAt] + 1;
}

for (let i = 0; i < ascii.length; i++) {
  if (ascii[i] > 0) {
    console.log(
      "this is " +
        String.fromCharCode(i) +
        " it appeared " +
        ascii[i] +
        " times",
    );
  }
}
