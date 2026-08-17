// const hello = () => {
//   console.log(this);
// };

const user = {
  name: "meer",
  hello() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

console.log("clg", user.hello());
