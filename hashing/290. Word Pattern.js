let pattern = "jquery",
  s = "jquery";
let sArray = s.split(" ");

function ISO() {
  let match = new Map();
  let sMatch = new Map();

  if (pattern.length !== sArray.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (match.has(pattern[i]) && match.get(pattern[i]) !== sArray[i]) {
      return false;
    }
    if (sMatch.has(sArray[i]) && sMatch.get(sArray[i]) !== pattern[i]) {
      return false;
    }
    match.set(pattern[i], sArray[i]);
    sMatch.set(sArray[i], pattern[i]);
  }

  console.log("text", match, sMatch);

  return true;
}
console.log(" pa", ISO(), sArray);
