const user = {
  first: "meer",
  last: "habib",

  get fullName() {
    return `${this.first} ${this.last}`;
  },

  set fullName(value) {
    const [first, last] = value.split(" ");

    this.first = first;
    this.last = last;
  },
};
console.log(user.fullName, user.first, user.last);
