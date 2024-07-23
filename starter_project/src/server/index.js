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

//GET routes

// POST Routes
app.post('/api/evaluate', function (req, res) {
    console.log(':: POST /api/evaluate');
    
    if (req.body.type == 'url') {
        extractArticle(req.body.data)
        .then(result =>  {
            if (!result.error) {
                return analyzeSentiment(result.data.content);
            } else {
                return result;
            }
        })    
        .then(result => res.send(result));
    } else if (req.body.type == 'txt' ) {
        analyzeSentiment(req.body.data)
        .then(result => res.send(result));
    } else {
        res.send({
            error: 1,
            message: `Invalid parameter: ${req.body.type}`,
            data: null,
        });
    }
    
});

// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


