const n = parseInt(prompt("Ведите номер операции"));
const A = parseInt(prompt("Ведите номер chisla"));
switch (n) {
    case 1:
        console.log("a v kelogrammax")
        console.log(A * 1 + "v  kiloggrammax");
        break;
    case 2:
        console.log("a v miligrammax ")
        console.log(A / 1000000 + "v  kiloggrammax");
        break;
    case 3:
        console.log("a v gramm");
        console.log(A / 1000 + "v  kiloggrammax");
        break;
    case 3:
        console.log("a v tonna");
        console.log(A * 1000 + "v kiloggrammax");
    case 4:
        console.log("a v tsentner");
        console.log(A / 100 + "v  kiloggrammax")
    default:
        console.log("takaya apiratsiya ne dostupno");
}