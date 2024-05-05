// any
// same race
// if all promises are rejected return [AggregateError: All promises were rejected]

const anyD = new Promise((_, reject) =>
    setTimeout(() => reject("AnyA resolved"), 1000)
);
const anyE = new Promise((_, reject) =>
    setTimeout(() => reject("AnyB resolved"), 500)
);
const anyF = new Promise((_, reject) =>
    setTimeout(() => reject("AnyC resolved"), 800)
);

const promisesArrAnyFail = [anyD, anyE, anyF];

Promise.any(promisesArrAnyFail)
    .then((results) => {
        console.log("First promise resolved:", results);
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });
