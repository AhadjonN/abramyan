let a = parseInt(prompt());
let b = parseInt(prompt());
const D = a % 2 == 1 && b % 2 == 0 || a % 2 == 0 && b % 2 == 1;
const data = (a % 2 + b % 2) == 1;
console.log(data);