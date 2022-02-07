const a = 432;
const b = a % 10;
const c = ((a - b) % 100);
const d = ((a - (b + c)) / 100);
console.log(b * 100 + c + d);
