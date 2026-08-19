// double every score

const res = {
  a: 20,
  b: 30,
  c: undefined,
};

const resDub = Object.entries(res).map(([key, value]) => [key, value * 2]);

const refrom = Object.fromEntries(resDub);

const fail = {
  d: -1,
};

const total = Object.assign({}, res, fail);

total.a = 50;
console.log(
  "res",
  total,
  res,
  "f" in res,
  Object.hasOwn(res, "c").Object.getOwnPropertyDescriptor(res, "a"),
);

let user = {};

Object.defineProperties(user, "id", {
  value: "1",
  writable: false,
  enumerable: true,
  configurable: false,
});
