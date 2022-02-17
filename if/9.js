let a = parseInt(prompt());
let b = parseInt(prompt());
if (a > b) {
    a, b = b, a
    console.log(a, b);
} else {
    console.log(b, a);
}