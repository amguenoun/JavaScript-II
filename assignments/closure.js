// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function outer() {
  const first = 'First';

  function inner() {
    const last = 'Last'

    console.log(`The ${first} comes before the ${last}.`);
  }

  return inner;
}

const closureExample = outer();
closureExample();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  return increment
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2


const newCounter = counter();
console.log(newCounter());
console.log(newCounter());


// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let count = 5;
  counterObj = {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  }

  return counterObj;
};

const newCounterObj = counterFactory();
console.log(newCounterObj.increment());
console.log(newCounterObj.increment());
console.log(newCounterObj.decrement());
