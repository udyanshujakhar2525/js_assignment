function judgeScore(a, b, c) {
    let score = (3 * a) + b - (2 * c);

    if (score < 0) score = 0;

    if (a + b + c > 50) score -= 10;

    const status = score >= 60 ? "PASS" : "FAIL";

    return { score, status };
}

const result = judgeScore(25, 5, 2);
console.log(`Score: ${result.score}, Status: ${result.status}`);