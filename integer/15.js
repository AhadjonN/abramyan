const a = 432;
const b = a % 10; 
const c = ((a - b) % 100); 
const d = ((a - (b + c)) / 100); 
console.log((c * 10) + (d * 10) + b);
