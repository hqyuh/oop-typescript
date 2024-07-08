// merge => NO => error: Duplicate identifier 'BB'
/*
type BB = {
    name: string;
}

type BB = {
    name: string;
}
*/

// computed properties => OK
type Keys = "name" | "age";
type CC = {
  [key in Keys]: string;
};
const cc: CC = {
  name: "CC",
  age: "24",
};

// intersection properties
type Name2 = {
  name: string;
};

type Age2 = {
  age: number;
};

type Person2 = Name2 & Age2;
