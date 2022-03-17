let D = parseInt(prompt(" den="));
let n = parseInt(prompt("vorid kuned"));
let M = parseInt(prompt("apiratsiya "));
switch (M) {
    case 1:
        D = 31;
    case 2:
        D = 28;
        console.log("imsol", D + 1);
        break
    case 3:
        D = 31;
        break
    case 4:
        D = 30;
    case 5:
        D = 31;
        break
    case 6:
        D = 30;
        break
    case 7:
        D = 31;
        break
    case 8:
        D = 30;
        break
    case 9:
        D = 31;
        break
    case 10:
        D = 30;
        break
    case 11:
        D = 31
    case 12:
        D = 30;
    default:
        M = "net takoy dadi "
}
console.log("soli pesh",D); 11