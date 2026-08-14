function create() {
  let count = 0;
  return function incre() {
    count++;
    console.log("count", count);
  };
}
const counter = create();
counter();
counter();
counter();
