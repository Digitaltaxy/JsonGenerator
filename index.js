function getRandomNumber(min = 0, max = 1, precision = 2) {
    return (Math.random() * (max - min) + min).toFixed(precision);
}

function getRandomBool() {
    return getRandomNumber() >= 0.5;
}

function getRandomInt(min = 0, max = 1) {
    return Math.floor(getRandomNumber(min, max));
}