let N = parseInt(prompt("komanda "));
let N1 = parseInt(prompt("komanda1 "));
let v = (N + N1);
switch (v) {
    case 1:
        console.log("s , z" + "pavarot na pravo");
        console.log("u , v" + "pavarot na pravo");
        break;
    case 2:
        console.log("s , z" + "pavarot na leva");
        console.log("u , v" + "pavarot na leva");
        break;
    case 3:
        console.log("s , z" + "pavarot na 180g");
        console.log("u , v" + "pavarot na 180g");
        break;
    default:
        v = "net tekoy komandi"
}
console.log(v)  ;
