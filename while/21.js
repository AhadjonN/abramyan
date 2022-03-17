let N = parseInt(prompt("n="))
while ((N > 0) & ((N % 10) % 2 == 0)) {
    N /= 10;
} if ((N % 10) % 2 != 0) {
    console.log("True");
} else {
    console.log("false")
}