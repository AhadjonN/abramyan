let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());
const V = (a < b && b < c || a > b && b > c);
console.log(V);