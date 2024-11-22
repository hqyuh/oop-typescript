// WeakMap: A collection of key-value pairs where the keys must be objects and the values can be arbitrary values.
// The keys in WeakMap are held weakly, meaning they do not prevent garbage collection.
// These are meant to store objects, and they do not prevent (ngăn chặn) Garbage Collector.
const weakMap = new WeakMap();
let objWeakMap1 = { name: "A" };
const objWeakMap2 = { name: "B" };

weakMap.set(objWeakMap1, "Value A");
weakMap.set(objWeakMap2, "Value B");

console.log(weakMap.get(objWeakMap1)); // Value A
console.log(weakMap.has(objWeakMap2)); // true

weakMap.delete(objWeakMap1);
console.log(weakMap.has(objWeakMap1));
objWeakMap1 = null; // Garbage Collector will auto-delete obj1 from WeakMap
