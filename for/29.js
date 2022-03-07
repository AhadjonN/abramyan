let n = parseInt(prompt("n="));
let a = parseInt(prompt("a="));
let b = parseInt(prompt("b="));
let h = (b - a) / n
for (i = 0; i < n; i++) {
    console.log(a + i * h)
}