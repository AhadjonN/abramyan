const a = parseInt(prompt());
const b = parseInt(prompt());
const c = parseInt(prompt());

if (a > b && b > c) {
    console.log(b);
}
else if (a > b && c > a) {
    console.log(a);
}
else {
    console.log(c);
}