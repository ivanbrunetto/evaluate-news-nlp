const serverUrl = 'http://localhost:8000/api/evaluate';

// Function to send data to the server
function fetchEvaluate(string, isUrl) {
    return fetch(serverUrl, {
        method: 'POST',
        body: new URLSearchParams({
            type: isUrl ? 'url' : 'txt',
            data: string
        })
    })
    .then(response => response.json());
}

export { fetchEvaluate };