// any
// same race
// but it will return first resolved promise

const anyA = new Promise((resolve) =>
    setTimeout(() => resolve("AnyA resolved"), 1000)
);
const anyB = new Promise((resolve) =>
    setTimeout(() => resolve("AnyB resolved"), 500)
);
const anyC = new Promise((resolve) =>
    setTimeout(() => resolve("AnyC resolved"), 800)
);

const promisesArrAnySuccess = [anyA, anyB, anyC];

Promise.any(promisesArrAnySuccess)
    .then((results) => {
        console.log("First promise resolved:", results);
    })
    .catch((error) => {
        console.error("At least one promise rejected:", error);
    });
