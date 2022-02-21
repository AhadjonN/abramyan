const n = parseInt(prompt("Ведите номер операции"));
const A = parseInt(prompt("ведите число А"));
const B = parseInt(prompt("ведите число В"));
if (n != 0) {
    switch (n) {
        case 1:
            console.log(A + B);
            break;
        case 2:
            console.log(A - B);
            break;
        case 3:
            console.log(A * B);
            break;
        case 4:
            console.log(A / B);
            break;
        default:
            n = "operatsiya ne dostupno"
    }
} else {
    console.log("znacheniya ne mojet bit ravno 0")
}