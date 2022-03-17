let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());

if ((a > b && b > c) || (a < b && a > c)) {
    console.log(a);
    console.log(b);

}
else if ((b < a && a < c) || (b < c && a > c)) {
    console.log(a);
    console.log(c);
}
else {
    console.log(c);
    console.log(b);
}