function intro() {
  console.log(this.name);
}
const user = {
  name: "meer",
  intro,
};

const introCall = user.intro;

console.log("hello", introCall());
