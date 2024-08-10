// resolve

// All promises must be resolved for it to return a response

const allA = new Promise((resolve) => setTimeout(() => resolve("a resolved"), 1000));
const allB = new Promise((resolve) => setTimeout(() => resolve("b resolved"), 500));
const allC = new Promise((resolve) => setTimeout(() => resolve("c resolved"), 800));

const promiseArrSuccess = [allA, allB, allC];

Promise.all(promiseArrSuccess)
  .then((res) => console.log("All resolved => ", res))
  .catch((err) => console.log(err));
