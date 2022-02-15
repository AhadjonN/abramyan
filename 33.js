const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());
const s = (a == b + c * c) || (b == a + c * c) || (c == b + a * a);
console.log(s);
