    let n = parseInt(prompt("n="))
    let f1 = 1, f2 = 1, f = 0;
    while (f < n) {
        f = f1 + f2
        f2 = f1
        f1 = f
    }
    console.log(f1)