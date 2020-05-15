const express = require('express');
const bodyParser = require('body-parser');
const random = require('./random.js');

const port = 3000;
var app = express();

app.use(bodyParser.json());
app.post('/random', (req, res) => {
    lengthArray = req.body.n;
    let responseJson = {};
    for (var i = 0; i < lengthArray; i++) {
        responseJson[i + 1] = random.generateJson();
    }
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(responseJson));
});

app.listen(port, () => console.log("Starting server..."))


/*
Sample Request:

POST http://localhost:3000/random
content-type: application/json
{
    "n": 5
}

*/