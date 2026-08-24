function createIt(nums) {
  let index = 0;
  return {
    next() {
      if (index < nums.length) {
        return {
          value: nums[index++],
          done: false,
        };
      }
      return {
        value: undefined,
        done: true,
      };
    },
  };
}

const iterator = createIt([10, 20, 30]);

console.log(iterator.next());
// { value: 10, done: false }

console.log(iterator.next());
// { value: 20, done: false }

console.log(iterator.next());
// { value: 30, done: false }

console.log(iterator.next());

const numbers = [10, 20, 30];

const iteratorsss = numbers[Symbol.iterator]();

console.log(iteratorsss.next());
console.log(iteratorsss.next());
console.log(iteratorsss.next());
console.log(iteratorsss.next());
console.log(iteratorsss.next());
console.log(iteratorsss.next());
console.log(iteratorsss.next());

function* generateNumbers() {
  yield 10;
  yield 20;
  yield 30;
}

for (const number of generateNumbers()) {
  console.log(number);
}

function* createIdGenerator() {
  let id = 0;

  while (true) {
    yield id++;
  }
}

const itr = createIdGenerator();

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
