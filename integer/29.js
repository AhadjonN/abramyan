const A = 23;
const B = 23;
const C = 16;
const D = Math.floor((A / C) * (B / C));
console.log(D);
const S = Math.floor(A * B - D * Math.sqrt(C));
console.log(S);