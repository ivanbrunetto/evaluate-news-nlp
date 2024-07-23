// Replace checkForName with a function that checks the URL
import { isValidUrl } from './inputChecker';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    //clear results
    setResultsUI();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    //send request to the server
    callEvaluate(formText, isValidUrl(formText))
    .then(response => handleServerResponse(response));
}

function setResultsUI(results={polarity: '-', subjectivity: '-', ironiy: '-', confidence: '-'}) {
    document.getElementById('results').innerHTML = `
        <p>
            Polarity: ${results.polarity} <br>
            Subjectivity: ${results.subjectivity} <br>
            Irony: ${results.irony} <br>
            Confidence: ${results.confidence} <br>
        </p>
    `;
}

function handleServerResponse(response) {
    console.log(response);
    if (response.error) {
        alert(response.message);
        return;
    } 

    setResultsUI( {
        polarity: response.data.score_tag,
        subjectivity: response.data.subjectivity,
        irony: response.data.ironiy,
        confidence: response.data.confidence
    })
}

// Function to send data to the server
async function callEvaluate(string, isUrl) {
    const request = new Request('http://localhost:8000/api/evaluate', {
        method: 'POST',
        body: new URLSearchParams({
            type: isUrl ? 'url' : 'txt',
            data: string
        })
    });
    
    try {
        const response = await fetch(request);
        if (!response.status) {
            throw new Error(`Problem communicating with server status=${status}`);
        }
        return await response.json();
    } catch(err) {
        console.log(err);
        return err.message;
    }
}


// Export the handleSubmit function
export { handleSubmit };

