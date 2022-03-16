let a = parseInt(prompt());
let b = parseInt(prompt());
n = a;
v = b;
let t = 2;
while (n < 0 && 0 > n || v < 0 && 0 > v) {
} if (n > v) {
    n = n % v
}
else {
    v = v % n
}
console.log("k=", n + v);