const x1 = 10;
const x2 = 20;
const x3 = 15;
const y1 = 10;
const y2 = 20;
const y3 = 15;

const d_AB = Math.sqrt(Math.abs((x1 - x2) + (y1 - y2)));
const d_AC = Math.sqrt(Math.abs((x2 - x3) + (y2 - y3)));
const d_BC = Math.sqrt(Math.abs((x3 - x1) + (y3 - y1)));
const P = (d_AB + d_AC + d_BC) / 2
console.log(P);
const S = Math.sqrt(P * (P - d_AB) * (P - d_AC) * (P - d_BC));
console.log(S);
