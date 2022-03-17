let x = parseInt(prompt());
if (x <= 0) {
    console.log(-x);
} else if (0 < x && x < 2) {
    console.log(Math.pow(x, 2));
} else if (x >= 2) {
    console.log(4);
}
