let x = parseInt(prompt("x="));
let n = parseInt(prompt("n="));
p = 1
s = 1
k = 1
for (i = 1; i <= n; i++) {
    k += 2
    p *= (-1) * x * x / (k * (k + 1));
    s += p
}
console.log(s);