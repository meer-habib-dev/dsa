function createCache() {
  const cache = new Map();

  return function cal(number) {
    let result = 0;

    if (cache.has(number)) {
      console.log("for cache");
      return cache.get(number);
    }

    console.log("calculating");
    result = number * number;
    cache.set(number, result);

    return result;
  };
}

const calS = createCache();

console.log("cal", calS(5));
console.log("cal", calS(5));
console.log("cal", calS(6));
