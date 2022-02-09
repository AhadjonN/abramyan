const A = parseInt(prompt());
const c = Math.floor(A / 10);
const v = (c <= 9 && A < 10 && A % 2 === 0);
console.log(v);
