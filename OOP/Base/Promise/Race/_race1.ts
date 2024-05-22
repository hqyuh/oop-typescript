// race
// race returns first promise with shortest delay whether it is resolved or rejected

const raceD = new Promise((resolve) => setTimeout(() => resolve("RaceD resolved"), 1000));
const raceE = new Promise((_, reject) => setTimeout(() => reject("RaceE reject"), 500));
const raceF = new Promise((resolve) => setTimeout(() => resolve("RaceF resolved"), 800));

const promisesArray = [raceD, raceE, raceF];

Promise.race(promisesArray)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
