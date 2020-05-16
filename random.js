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

    return "np" + getRandomInt(+min_, +max_);
}

async function getRandomImages(count = 2, query = 'nose pin', width = 200, height = 300) {

    var Scraper = require('images-scraper');
    const google = new Scraper({
        puppeteer: {
            headless: true,
        }
    });
    let imageUrls = [];
    return google.scrape(query, count).then((results) => {
        for (let i = 0; i < results.length; i++) {
            imageUrls.push(results[i].url);
        }
    }).then(() => {
        return imageUrls;
    });
}

exports.generateJson = async(x) => {
    let returnArr = [];
    template = {
        'StyleNumber': getRandomString(),
        'Images': await getRandomImages(),
        'DiamondWeight': getRandomNumber(min = 0, max = 2),
        'GoldWeight': getRandomNumber(min = 0, max = 4, precision = 3),
        'DiamondCount': getRandomInt(min = 0, max = 100),
        'DesignParameters': {
            'featuredDesign': getRandomBool(),
            'highestSelling': getRandomBool(),
            'hancyDiamond': getRandomBool(),
            'newDesign': getRandomBool(),
        }
    };
    for (var i = 0; i < x; i++) returnArr.push(template);
    return returnArr;
}