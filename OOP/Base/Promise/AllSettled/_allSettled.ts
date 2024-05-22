// resolve
// same promise all,
// but it waits for all the promises to settle (either resolved or rejected)
// it returns an array of objects including their values or reasons for rejection

const settledA = new Promise((resolve) => setTimeout(() => resolve("SettledA resolved"), 1000));
const settledB = new Promise((resolve) => setTimeout(() => resolve("SettledB resolved"), 500));
const settledC = new Promise((resolve) => setTimeout(() => resolve("SettledC resolved"), 800));

const promisesArr = [settledA, settledB, settledC];

Promise.allSettled(promisesArr).then((results) => {
  console.log("All promises settled:", results);
});
