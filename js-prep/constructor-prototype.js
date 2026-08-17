function User(name) {
  this.name = name;
}

User.prototype.introduce = function () {
  console.log(`hi, this is ${this.name}`);
};

const meer = new User("meer");

meer.introduce();
