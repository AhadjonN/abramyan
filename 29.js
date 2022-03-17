const x = parseInt(prompt());
const y = parseInt(prompt());
const x1 = parseInt(prompt());
const y1 = parseInt(prompt());
const x2 = parseInt(prompt());
const y2 = parseInt(prompt());
const s = x < x1 && x < x2 || y < y1 && y < y2;
console.log(s);