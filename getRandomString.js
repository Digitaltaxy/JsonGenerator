// using "np" as the prefix...

var random = require('./index.js');

function getRandomString(requiredLength) {
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

console.log(getRandomString(5))