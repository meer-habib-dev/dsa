function throttle(callback, delay) {
  let canRun = true;

  return function (...args) {
    if (!canRun) return;

    canRun = false;

    callback.apply(this, args);

    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

const thr = throttle(() => {
  console.log("handle scroll");
}, 500);
