// race
// race returns first promise with shortest delay whether it is resolved or rejected

const raceA = new Promise((resolve) => setTimeout(() => resolve("RaceA resolved"), 1000));
const raceB = new Promise((resolve) => setTimeout(() => resolve("RaceB resolved"), 500));
const raceC = new Promise((resolve) => setTimeout(() => resolve("RaceC resolved"), 800));

const promisesArrSuccess = [raceA, raceB, raceC];

Promise.race(promisesArrSuccess)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
