let a = parseInt(prompt("a="));
let n = parseInt(prompt("n="));
let p = 1;
let s = 1;
for (i = 1; i <= n; i++) {
    p *= a * (-1)
    s += p
}
console.log(s); 