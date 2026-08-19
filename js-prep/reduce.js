// const users = [
//   { name: "Meer", role: "Developer" },
//   { name: "Alex", role: "Designer" },
//   { name: "Sam", role: "Developer" },
// ];

// const groups = users.reduce((group, user) => {
//   const role = user.role;

//   if (!group[role]) {
//     group[role] = [];
//   }

//   group[role].push(user);

//   return group;
// }, {});

// console.log(groups);

// console.log([].every(() => true));
// console.log([].every(() => false));

// console.log([].some(() => true));
// console.log([].some(() => false));

const list = [
  { name: "Sam", age: 20 },
  { name: "Meer", age: 25 },
  { name: "Alex", age: 30 },
];

// list.sort((a, b) => b.age - a.age);
// // list.sort((a, b) => a.name.localeCompare(b.name));

// console.log("l", list);
// list.toSorted((a, b) => a.age - b.age);
// console.log(list);

let newD = [1, 2, [3, [4, [5]]]];

console.log(newD.flat(Infinity));

const sentences = ["React Native", "JavaScript DSA"];

const s = sentences.map((s) => s.split(" ")).flat();

console.log(s);

const numbers = [1, 2, 3, 4];

const result = numbers.flatMap((num) => {
  if (num % 2 === 0) return [num, num * num];

  return [];
});

console.log(result);
