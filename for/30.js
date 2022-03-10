let n = parseInt(prompt("n="));
let a = parseInt(prompt("a="));
let b = parseInt(prompt("b="));
let h = (b - a) / n;
console.log(h);
let x = a;
for (i = 1; i <= n; i++) {
    y = 1 - Math.sin(x)
    x += h
}
console.log(x);