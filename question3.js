function findSmallestX(N, K) {
    const limit = 100000;

    for (let X = 0; X <= limit; X++) {
        let sum = N + X;
        if (sum % K === 0) {
            let strSum = sum.toString();
            let reversedSum = strSum.split('').reverse().join('');

            if (strSum === reversedSum) {
                return X;
            }
        }
    }

    return -1; 
}
