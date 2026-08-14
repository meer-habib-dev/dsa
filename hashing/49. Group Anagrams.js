let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams() {
  let strMap = new Map();

  let result = [];

  for (let i = 0; i < strs.length; i++) {
    let check = strs[i].split("").sort().join("");

    if (strMap.has(check)) {
      let val = strMap.get(check);
      val.push(strs[i]);
      strMap.set(check, val);
      continue;
    }

    strMap.set(check, [strs[i]]);
  }

  for (let arr of strMap.values()) {
    result.push(arr);
  }
  console.log(result);
}

console.log(groupAnagrams());

//  if (i === 0) {
//       result.push(strs[i]);
//       continue;
//     }
//     let count = 0;
//     for (let j = 0; j < strs[i].length; j++) {
//       if (result[0].includes(strs[i][j])) {
//         count++;
//       } else {
//         count = 0;
//       }
//       console.log("jc", j + 1, count);
//       if (j === count) {
//         count = 0;
//         result.push(strs[i]);
//       }
//     }
//     console.log();
