const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());

if (a < b && a < c) {
    console.log(b);
    console.log(c);
} else if (b < a && b < c) {
    console.log(a);
    console.log(c);
}
else if (c < a && c < b) {
    console.log(a);
    console.log(b);
}