const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());

if (a > b && b > c) {
    console.log(c);
}
else if (a < b && b < c) {
    console.log(a);
}
else {
    console.log(b);
}