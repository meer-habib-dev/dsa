function createMulti(m) {
  return function player(p) {
    console.log(p * m);
  };
}
const c = createMulti(2);

c(10);
c(20);
