const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());
const s = (a < b + c) || (b < a + c) || (c < b + a)
console.log(s);