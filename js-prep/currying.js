function add(a, b, c) {
  return a + b + c;
}

console.log(add(10, 20, 30));

function addc(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(addc(10)(20));

const createLogger = (label) => (moduleName) => (message) =>
  console.log(`[${label}] [${moduleName}] ${message}`);

const logBox = createLogger("Error")("Inbox");

logBox("Fail to load msg");
