let a = parseInt(prompt("rakam "));
let T = parseInt(prompt("case - "));
switch (T) {
    case 1:
        console.log(a);
    case 2:
        let R1 = a * Math.sqrt(3 / 6);
        console.log(R1);
    case 3:
        let R2 = 2 * R1
        console.log(R2);
    case 4:
        let s = Math.pow(a, 2) * Math.sqrt(3 / 4);
        console.log(s);
    default:
        T = "Error "
}
console.log(T);

