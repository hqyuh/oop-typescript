const deepClone2 = <T>(value: T): T => {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone2(item)) as T;
  }

  const result = Object.fromEntries(Object.entries(value).map(([key, value]) => [key, deepClone2(value)])) as T;

  return result;
};

const object2 = { user: { role: "admin" } };
const clonedObject2 = deepClone2(object2);

clonedObject2.user.role = "user";

console.log(object2);
console.log(clonedObject2);

/**
 * Be careful when using JSON.stringify and JSON.parse,
 * because they will be missed if assigned undefined or NaN, and will be converted to null.
 */
console.log(
  JSON.parse(
    JSON.stringify({
      a: new Date(),
      b: NaN,
      c: new Function(),
      d: undefined,
      e: () => {},
      f: Number,
      g: false,
      h: Infinity,
    }),
  ),
);
