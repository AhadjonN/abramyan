let N = parseInt(prompt("n="));
q = N
s = 0
while (q >= 1) {
    r = q % 10
    q = (q / 10)
    s = s * 10 + r
    console.log(s);
}