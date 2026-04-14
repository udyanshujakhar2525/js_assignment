function digit_gatekeeper(L,R,K) {
    // let L = prompt("Enter the value of L: ");
    // let R = prompt("Enter the value of R: ");
    // let K = prompt("Enter the value of K: ");
    // let x = prompt("Enter the value of x: ");
    let count = 0;
    // if (L <= x && x <= R) {
    //     if (x % K === 0) {
    //         alert("YES");
    //     }else {
    //         console.log("NOT DIVISIBLE");
    //     }
    // } else {
    //     console.log("NOT IN RANGE");
    // }

    function isprime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function sumoprime(num) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        return isprime(sum);
    }

    for (let i = L; i <= R; i++) {
        if (i % K === 0) {
            if (i >= L && i <= R) { 
                if (sumoprime(i)) {   
                    count++;
                    alert(count);
                }
            } else {
                console.log("NOT IN RANGE",i);
            }
        }
    }
    alert("Total count: " + count);
}

digit_gatekeeper();
//