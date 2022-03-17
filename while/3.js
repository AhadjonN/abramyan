let n = parseInt(prompt("n="));
let k = parseInt(prompt("k="));
let C = n;
let g = 0;
while (C >= k) {
    C -= k
    g += 1
}
console.log(C);
console.log(g);