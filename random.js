function getRandomNumber(min = 0, max = 1, precision = 2) {
    return (Math.random() * (max - min) + min).toFixed(precision);
}

function getRandomBool() {
    return getRandomNumber() >= 0.5;
}

function getRandomInt(min = 0, max = 1) {
    return Math.floor(getRandomNumber(min, max));
}

function getRandomString(requiredLength = 5) {
    if (requiredLength <= 2) {
        return "Too short String";
        // later return an anagram or bi-gram as per discussion 
    }
    var min_ = '1'
    for (var i = 0; i < requiredLength - 3; i++) min_ += '0';

    var max_ = '9'
    for (var i = 0; i < requiredLength - 3; i++) max_ += '9';

    return "np" + random.getRandomInt(+min_, +max_);
}