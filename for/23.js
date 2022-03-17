let x = parseInt(prompt("x="));
let n = parseInt(prompt("n="));
p = x
s = 1
k = 0
for (i = 1; i <= n; i++) {
    k += 2
    p *= (-1) * x * x / (k * (k + 1));
    s += p
}
console.log(s);