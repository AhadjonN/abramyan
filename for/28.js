const n = parseInt(prompt("n="));
const x = parseInt(prompt("x="));
let a = 1;
let b = 1;
let c = 1;
let t = 1;
for (i = 1; i < n; i++) {
    a *= 2 * i - 3
    b *= 2 * i
    c *= (-1) * x
    t += a * c / b
}
console.log(t);