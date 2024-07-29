import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import analyzeSentiment from './sentimentAnalyzer.js';
import extractArticle from './articleExtractor.js';

const TYPE_URL = 'url';
const TYPE_TXT = 'txt';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

//GET routes

// POST Routes
app.post('/api/evaluate', function (req, res) {
    console.log(':: POST /api/evaluate');
    
    const type = req.body.type;
    if (!isValidType(type)) {
        const err = `Invalid type: ${req.body.type}`
        console.log(err);
        res.send({
            error: 1,
            message: err,
            data: null,
        });
        return;
    }

    if (type == TYPE_TXT) {
        analyzeSentiment(req.body.data)
        .then(sentiment => res.send(sentiment));
        return;
    }

    if (type == TYPE_URL) {
        analyzeSentimentFromArticle(req.body.data)
        .then(sentiment => res.send(sentiment));
        return;
    }   
});

function isValidType(type) {
    return (type == TYPE_URL || type == TYPE_TXT);  
}

function analyzeSentimentFromArticle(url) {
    return extractArticle(url)
        .then(article =>  {
            if (article.error) {
                return article;
            }            
            return analyzeSentiment(article.data.content);
        });
}

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


