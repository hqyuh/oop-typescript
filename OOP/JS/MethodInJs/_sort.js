// sort
// This method is used to arrange/sort array’s elements either in ascending or descending order.

const alphabet = ['a', 'b', 'e', 'c', 'd'];
const desc = alphabet.sort((a, b)  => a > b ? -1 : 1);
const asc = alphabet.sort((a, b) => a > b ? 1 : -1);
