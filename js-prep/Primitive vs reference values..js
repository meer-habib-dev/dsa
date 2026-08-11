let user = {
  name: "meer",
};

const user1 = user;

user = null;

console.log("u", user, user1);
