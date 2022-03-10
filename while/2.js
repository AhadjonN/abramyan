const A = parseInt(prompt("a="));
const B = parseInt(prompt("b="));
let C = A;
n = 1
while (C > B) {
    C = C - B;
    C -= B
    n += 1
}
console.log(C);
console.log(n)