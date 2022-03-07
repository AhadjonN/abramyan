const n = parseInt(prompt("n="));
const x = parseInt(prompt("x="));
let a = 1;
let b = 2;
let c = x;
let t = x;
for (i = 1; i < n; i++) {
    a *= 2 * i - 1
    b *= 2 * i
    c *= x * x
    t += a * c / (b * (2 * i + 1))
}
console.log(t);