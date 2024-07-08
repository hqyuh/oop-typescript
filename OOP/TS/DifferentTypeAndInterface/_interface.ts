// merge => OK

interface AA {
  name: string;
}

interface AA {
  age: number;
}

const a1: AA = {
  name: "HH",
  age: 24,
};

// computed properties => NO => error: A mapped type may not declare properties or methods.
/*
type keys = 'name' | 'age'

interface Person {
    [key in keys]: string
}
*/

// intersection properties
interface Name1 {
  name: string;
}

interface Age1 {
  age: number;
}

type Person1 = Name1 & Age1;

// extend and implements
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
