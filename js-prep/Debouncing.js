function debounce(callBack, delay) {
  let timerId;
  return function (...arg) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callBack.apply(this, arg);
    }, delay);
  };
}

const searchUser = debounce((query) => {
  console.log("searching for query", query);
});

searchUser("m");
searchUser("me");
searchUser("mee");
searchUser("meer");
