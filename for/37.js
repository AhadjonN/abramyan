const N = parseInt(prompt());
let C = 0;
for (let i = 1; i <= N; i++) {
    C = Math.pow(i, i) + C;
}
console.log(C);