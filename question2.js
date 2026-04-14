function roll_seed(N,seed) {
    let N = Number(prompt("Enter N:"));
    let seed = Number(prompt("Enter seed:"));

    for (let i = 0; i < 3; i++) {
        if (N % 2 === 0) {
            N = (N / 2) + seed;
        } else {
            N = (N * 3) - seed;
        }
    }

    if (N >= 100 && N <= 999) {
        let k = Math.floor(N / 10) % 10;
        if (k === seed) {
            alert("YES, " + N);
        } else {
            alert("NO, " + N);
        }
    } else {
        alert("NO, " + N);
    }
}

roll_seed();