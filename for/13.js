let N = parseInt(prompt("N="));
let y = 1;
for (i = 1; i <= N; i++) {
    x = 1 - i - 0.1
    y -= x
}
console.log(y); 