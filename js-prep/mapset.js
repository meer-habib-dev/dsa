const userObject = [
  ["name", "Meer"],
  ["role", "Developer"],
];

const user = new Map(userObject);

console.log("user", user, Object.fromEntries(user));

const numbers = [1, 2, 2, 3, 3, 3];

let res = [...new Set(numbers)];
console.log(res);

// insertion
const first = new Set([1, 2, 3]);
const second = new Set([2, 3, 4]);

const rest = new Set([...first].filter((item) => second.has(item)));

console.log("res", first.union(second));
console.log("res", first.intersection(second));
console.log("res", first.difference(second));

const a = [1, 2];
const b = [2, 3];
