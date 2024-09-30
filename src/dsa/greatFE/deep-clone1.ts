const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

const object1 = { user: { role: "admin", date1: undefined } };
const clonedObject1 = deepClone(object1);

clonedObject1.user.role = "user";
console.log(object1);
console.log(clonedObject1);
