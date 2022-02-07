const a = 432;
const b = a % 10;
const c = a % 100 / 10;
const d = a / 100;
const sum = Math.floor(b + c + d);
const data = Math.floor(b * c * d);
console.log(sum);
console.log(data);