
// resolve

// All promises must be resolved for it to return a response

const a = new Promise((resolve) => setTimeout(() => resolve('a resolved'), 1000));
const b = new Promise((resolve) => setTimeout(() => resolve('b resolved'), 500));
const c = new Promise((resolve) => setTimeout(() => resolve('c resolved'), 800));

const promiseArrSuccess = [a, b, c];

Promise.all(promiseArrSuccess)
    .then((res) => console.log('All resolved => ', res))
    .catch((err) => console.log(err));