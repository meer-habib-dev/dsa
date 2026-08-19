const s = "0P";
// s.replace(/[^\w\s]/g, "").toLowerCase();
const sortedS = s.replace(/[^A-Za-z]/g, "").toLowerCase();
console.log("sor", sortedS);
let i = 0;
let j = sortedS.length - 1;

while (i < j) {
  const a = sortedS[i];
  const b = sortedS[j];

  console.log("a,b", a, b);

  if (a === b) {
    i++;
    j--;
  } else {
    console.log("false");
    return;
  }
  console.log("true");
}

/*

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        while (
            left < right &&
            !/[a-zA-Z0-9]/.test(s[left])
        ) {
            left++;
        }

        while (
            left < right &&
            !/[a-zA-Z0-9]/.test(s[right])
        ) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};


*/
