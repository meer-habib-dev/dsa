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
const user = {
  name: "Meer",
};

const proxy = new Proxy(user, {
  get(target, property, receiver) {
    console.log(`Reading ${String(property)}`);

    return Reflect.get(target, property, receiver);
  },

  set(target, property, value, receiver) {
    console.log(`Updating ${String(property)}`);

    return Reflect.set(target, property, value, receiver);
  },
});
