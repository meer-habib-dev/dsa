// const user = {
//   name: "meer",
// };

// console.log(Object.hasOwn(user, "name"));
// console.log(Object.hasOwn(user, "toString"));
// console.log("toString" in user);
// console.log(Object.prototype);

// const child = Object.create(user);

// child.name = "farju";

// console.log("", user.name, child.name);
// delete child.name;
// console.log("", user.name, child.name);
// const arr = [1, 2];
// console.log(Object.getPrototypeOf(user) === Object.prototype);
// console.log(Object.getPrototypeOf(arr) === Array.prototype);
// console.log(user.__proto__ === Object.prototype);

function User(name) {
  this.name;
}

const meer = new User("meer");
const habib = new User("habib");

User.prototype.introduce = function () {
  console.log("hello", this.name);
};

console.log(meer.prototype.introduce);
