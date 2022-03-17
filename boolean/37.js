const x1 = parseInt(prompt());
const y1 = parseInt(prompt());
const x2 = parseInt(prompt());
const y2 = parseInt(prompt());
const K = ((Math.abs(x1 - x2) <= 1) && (Math.abs(y1 - y2) <= 1));
console.log(K);