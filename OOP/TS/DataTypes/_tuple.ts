// declare tuple variable
const hh: [number, string] = [1, 'HH'];

// accessing tuple elements
console.log(hh[1]);

// add elements
hh.push(2, 'H2');
console.log(hh);

// 'const' declarations must be initialized.
// it means same hh, hh must be initialized is [1, 'HH]

// array tuple
let arr: [number, string][];
arr = [[1, 'A'], [2, 'B'], [3, 'C']];
console.log(arr);