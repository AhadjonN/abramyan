let x = parseInt(prompt("x="));
let n = parseInt(prompt("n="));
let f = 1
let y = 0;
for (i = 1; i <= n; i++) {
    y = 1 + x + Math.pow(x, i) / i
    y += f
}
console.log(y); 