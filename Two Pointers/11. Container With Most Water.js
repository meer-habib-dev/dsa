let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

let i = 0;
let j = height.length - 1;

let count = 0;

while (i <= j) {
  let lineOne = height[i];
  let lineTwo = height[j];
  let smallLine = Math.min(lineOne, lineTwo);
  let length = j - i;
  let size = smallLine * length;

  count = Math.max(count, size);

  if (lineOne < lineTwo) {
    i++;
  } else {
    j--;
  }
}

console.log(count);
