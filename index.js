function getRandomNumber(min = 0, max = 1, precision = 2) {
    return (Math.random() * (max - min) + min).toFixed(precision);
}

function getRandomBool() {
    return getRandomNumber() >= 0.5;
}

console.log(getRandomNumber(123, 35464))
console.log(getRandomBool())