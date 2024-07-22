/* const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sentimentAnalyzer = require('./sentimentAnalyzer');
const articleExtractor = require('./articleExtractor'); 
*/

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import analyzeSentiment from './sentimentAnalyzer.js';
import extractArticle from './articleExtractor.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

//console.log(__dirname);

//GET routes

// POST Routes
app.post('/api/evaluate/txt', function (req, res) {
    console.log(':: POST /api/evaluate/txt');
    analyzeSentiment(req.body.txt)
    .then(sentiment => res.send(sentiment));
});

app.post('/api/evaluate/url', function (req, res) {
    console.log(':: POST /api/evaluate/url');
    extractArticle(req.body.url)
    .then(result =>  {
        if (result.error) {
            throw new Error(result.message);
        }
        return analyzeSentiment(result.data.content);
    })
    .then(result => {
        if (result.error) {
            throw new Error(result.message);
        }
        res.send(result.data);
    })
    .catch(err => {
        res.send(err.message);
    })
});




// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


