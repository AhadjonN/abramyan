let S = parseInt(prompt(" vorid kuned1"));
let Z = parseInt(prompt("vorid kuned2"));
let U = parseInt(prompt("vorid kuned3 "));
let V = parseInt(prompt("vorid kuned4 "));
let N = parseInt(prompt("komanda "));
switch (N) {
    case 0:
        N = S;
        N = Z;
        N = U;
        N = V;
        console.log("pradoljit dvijeniya");
        break;
    case 1:
        N = S;
        N = Z;
        N = U;
        N = V;
        console.log("pavarot na levo");
        break;
    case 2:
        N = S;
        N = Z;
        N = U;
        N = V;
        console.log("pavarot na pravo");
        break;
    default:
        N = "net takoy kamandi"
}
console.log(N);