// When you are not sure about what type you can assign? => Use unknown
let ah: unknown = 2;

const project = {
  code: 100,
  specification: {
    areaSize: 100,
    rooms: 3,
  },
} as const;

type Specification = typeof project['specification'];

const cca: Specification = {
    areaSize: 100,
    rooms: 3
}
console.log('🐔 =>  cca:', cca);
