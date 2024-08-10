// Nullable
// can be null
type Nullable<T> = T | null;

type House = {
  id: Nullable<number>;
  name: string;
};

const house: House = {
  id: null,
  name: "House",
};
