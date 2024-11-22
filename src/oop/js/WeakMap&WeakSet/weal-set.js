// WeakSet: A collection of objects, held weakly.
// Objects in a WeakSet can be garbage-collected if there are no other references to them.

const weakSet = new WeakSet();

const obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet);

console.log(weakSet.has(obj1));

weakSet.delete(obj1);

obj2 = null; // Garbage Collector will auto-delete obj2 from WeakSet
