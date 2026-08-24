const user = {
  name: "meer",
};

const proxyhandle = new Proxy(user, {
  get(target, property) {
    console.log(`Reading Properly ${String(property)}`);
    return target[property];
  },
});

console.log(proxyhandle.name);
