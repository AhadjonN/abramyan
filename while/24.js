let a = parseInt(prompt());
let b = parseInt(prompt());
let t = 2;
while (a != 0 && b != 0) {
} if (a > b) {
    a = a % b
} else {
    b = b % a
}
console.log("k=", a + b);