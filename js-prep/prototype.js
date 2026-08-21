const user = {
  name: "meer",
};

console.log(Object.hasOwn(user, "name"));
console.log(Object.hasOwn(user, "toString"));
console.log("toString" in user);
console.log(Object.prototype);
