export function handleSubmit(event) {
    event.preventDefault();

    //clear results
    setResultsUI();

    // Get the text from the input field
    const inputText = document.getElementById('name').value;

    //send request to the server
    Client.fetchEvaluate(inputText, Client.isValidUrl(inputText))
    .then(response => {
        //console.log(response.data.score_tag);
        if (response.error) {
            alert(response.message);
            return;
        } 

        setResultsUI( {
            polarity: response.data.score_tag,
            subjectivity: response.data.subjectivity,
            ironiy: response.data.ironiy,
            confidence: response.data.confidence
        })   
    })
    .catch(err => {
        console.log('Error: ', err);
        alert('server is down');
    });
}

function setResultsUI(results={polarity: '-', subjectivity: '-', ironiy: '-', confidence: '-'}) {
    document.getElementById('results').innerHTML = `
        <p>
            Polarity: ${results.polarity} <br>
            Subjectivity: ${results.subjectivity} <br>
            Irony: ${results.ironiy} <br>
            Confidence: ${results.confidence} <br>
        </p>
    `;
}

