const user = {
  name: "meer",
};

console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "toString"));
console.log("toString" in user);
console.log(Object.prototype);

const child = Object.create(user);

child.name = "farju";

console.log("", user.name, child.name);
delete child.name;
console.log("", user.name, child.name);
