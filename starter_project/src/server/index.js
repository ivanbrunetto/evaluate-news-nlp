var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sentimentAnalyzer = require('./sentimentAnalyzer');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

console.log(__dirname);

//GET routes

// POST Routes
app.post('/api', function (req, res) {
    console.log(':: POST /api');
    //console.log(req.body.txt);
    sentimentAnalyzer.analyze(req.body.txt)
    .then(aResult => res.send(aResult));
});



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


