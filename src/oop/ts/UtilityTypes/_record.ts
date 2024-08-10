// Record<Keys, Type>
// It will create a type with Keys and Values.
type CatInfo = {
  age: number;
  breed: string;
};

type CatName = "cat" | "ki" | "bi";

const cats: Record<CatName, CatInfo> = {
  cat: {
    age: 10,
    breed: "cat",
  },
  ki: {
    age: 10,
    breed: "ki",
  },
  bi: {
    age: 10,
    breed: "bi",
  },
};

console.log(cats);
