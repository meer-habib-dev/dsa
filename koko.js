function koko(piles, h) {
  let low = 1;
  let high = Math.max(...piles);

  //   console.log("low", low, high);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // console.log("mid", low, high, mid);

    if (isValid(piles, h, mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function isValid(piles, h, mid) {
  let sum = 0;
  let hours = 0;

  //   console.log("sum", sum, hours);
  for (let pile of piles) {
    // if (sum + pile <= mid) {
    // //   sum += pile;
    // } else {
    //     //   sum = pile;
    // }
    pile % mid === 0 ? (hours += pile / mid) : (hours += Math.ceil(pile / mid));
  }

  console.log("pile", mid, sum, hours, hours <= h);
  return hours <= h;
}

let piles = [30, 11, 23, 4, 20];
let h = 6;

console.log(koko(piles, h));
