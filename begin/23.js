let a = 1;
let b = 2;
let c = 3;

a = a + b;
b = a - b;
a = a - b;
c = c + a;
a = c - a;
c = c - a;
console.log(a, b, c)

