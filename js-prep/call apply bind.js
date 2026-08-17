function greet(message, area) {
  console.log(`hello ${this.name}, ${message} from ${area}`);
}

const user = {
  name: "meer",
};

greet.call(user, "Good Morning", "Chittagong");
greet.apply(user, ["Good Evening", "Dhaka"]);
const callme = greet.bind(user, "Good night", "coxs");
callme();
