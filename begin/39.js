const a = 6;
const b = -1;
const c = -15;
const D = Math.pow(b, 2) - 4 * a * c;
console.log(D);
if (D < 0) {
    console.log("false");
}
if (D === 0) {
    const x = (-b) / (2 * a);
    console.log("x=" + x);

} else {
    console.log();
    const x1 = (-b - Math.sqrt(D)) / (2 * a);
    const x2 = (-b + Math.sqrt(D)) / (2 * a);
    console.log("x1=" + x1);
    console.log("x2=" + x2);
}
