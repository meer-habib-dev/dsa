const user = {
  name: "meer",

  introduce() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

user.introduce();
