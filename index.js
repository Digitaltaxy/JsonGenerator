function getRandomNumber(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function getRandomBool() {
    return getRandomNumber() >= 0.5;
}
