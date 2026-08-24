function memorization(callback) {
  const cache = new Map();

  return function (arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = callback.call(this, arg);

    cache.set(arguments, result);

    return result;
  };
}

const calculateSquare = memorization((price) => price * price);

console.log(calculateSquare(10));
