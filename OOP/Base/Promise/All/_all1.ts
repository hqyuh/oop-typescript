
// reject

// If any of the promises rejects, it won't wait for others to resolve
// and will return with reason of the promise that is rejected
const d = new Promise((resolve) => setTimeout(() => resolve('d resolved'), 2000));
const e = new Promise((resolve) => setTimeout(() => resolve('e resolved'), 500));
const f = new Promise((_, reject) => setTimeout(() => reject('f resolved'), 1000));

const promiseArrFail = [d, e, f];

Promise.all(promiseArrFail)
    .then((res) => console.log('All resolved => ', res))
    .catch((err) => console.error(err));