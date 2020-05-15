const express = require('express');
const random = require('./random.js');

const port = 3000;
var app = express();

app.get('/', (req, res) => {
    res.send('Test');
});

app.post('/random', (req, res) => {
    console.log(req);
    res.sendStatus(200);
});


app.listen(port, () => console.log(`Started server at http://localhost:{ port }`))