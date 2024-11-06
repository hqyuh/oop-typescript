// any

const anyH = new Promise((resolve, _) => setTimeout(() => resolve("AnyA resolved"), 1000));
const anyJ = new Promise((resolve) => setTimeout(() => resolve("AnyB resolved"), 500));
const anyK = new Promise((_, reject) => setTimeout(() => reject("AnyC resolved"), 800));

const promisesArrAnyOneSuccess = [anyH, anyJ, anyK];

Promise.any(promisesArrAnyOneSuccess)
  .then((results) => {
    console.log("First promise resolved:", results);
  })
  .catch((error) => {
    console.error("At least one promise rejected:", error);
  });
