let k = parseInt(prompt("vividete k 1 - 5:"));
switch (k) {
    case 1:
        k = "плохо"
        break
    case 2:
        k = "неудовлетворительно"
        break
    case 3:
        k = "удовлетворительно"
        break
    case 4:
        k = "хорошо"
        break
    case 5:
        k = "«отлично"
        break
    default:
        k = "ошибка"
}
console.log(k);