const n = parseInt(prompt("Ведите номер операции"));
const A = parseInt(prompt("Ведите номер chisla"));
switch (n) {
    case 1:
        console.log("a v detsimetrax")
        console.log(A / 10 + "v metrax");
        break;
    case 2:
        console.log("a v kilometrax")
        console.log(A * 1000 + "v metrax");
        break;
    case 3:
        console.log("a v metrax");
        console.log(A + "v metrax");
        break;
    case 3:
        console.log("a v milimetrax");
        console.log(A / 1000 + "v metrax");
    case 4:
        console.log("a v santimetrax");
        console.log(A / 100 + "v metrax")
    default:
        n = "takaya apiratsiya ne dostupno"
}