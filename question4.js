function calculateFare(base, distance, minutesLate, seed) {
    let fare = base + 7 * distance;

    if (minutesLate > 15) {
        fare += 20;
    }

    if (distance > 10) {
        fare += Math.floor(0.10 * fare);
    }

    if (seed % 2 !== 0) {
        fare -= seed;
    } else {
        fare += seed;
    }

    return Math.ceil(fare / 5) * 5;
}