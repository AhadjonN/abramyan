let hafta = parseInt(prompt("vividete ot 1 do 7:"));
switch (hafta) {
    case 1:
        hafta = "dushnde"
        break
    case 2:
        hafta = "seshnde"
        break
    case 3:
        hafta = "chorshnde"
        break
    case 4:
        hafta = "natjshnde"
        break
    case 5:
        hafta = "juma"
        break
    case 6:
        hafta = "shanbe"
        break
    case 7:
        hafta = "yakshnde"
        break
    default:
        hafta = "inxel hafta nest"
}
console.log(hafta);