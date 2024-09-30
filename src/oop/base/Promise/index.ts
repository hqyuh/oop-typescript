async function abc() {
  console.log(8);
  await Promise.resolve(2).then(console.log);
  // the code below await is blocked until promise above is resolved
  console.log(3);
}

setTimeout(() => console.log(1), 0);
abc();
Promise.resolve(4).then(console.log);
console.log(6);

// output: 8 6 2 4 3 1