
// resolve
// same promise all 
// but it waits for all the promises to settle (either resolved or rejected)
// it returns an array of objects including their values or reasons for rejection

const settledD = new Promise((resolve) =>
    setTimeout(() => resolve("SettledD resolved"), 1000)
);
const settledE = new Promise((_, reject) =>
    setTimeout(() => reject("SettledE resolved"), 500)
);
const settledF = new Promise((resolve) =>
    setTimeout(() => resolve("SettledF resolved"), 800)
);

const promisesArrFail = [settledD, settledE, settledF];

Promise.allSettled(promisesArrFail).then((results) => {
    console.log("All promises settled:", results);
});