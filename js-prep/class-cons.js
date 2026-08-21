class User {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`hi, im ${this.name}`);
  }
  getRole() {
    return "devs";
  }
}

const meer = new User("meer");

class Developer extends User {
  //   constructor(name, skill) {
  //     super(name);

  //     this.skill = skill;
  //   }

  code() {
    super.introduce();
    console.log(this.name + " Love " + this.skill);
  }

  getRole() {
    return "job less";
  }
}

const dev = new Developer("alex", "expo");
dev.introduce();
dev.code();
console.log(dev.getRole());

console.log(dev);
