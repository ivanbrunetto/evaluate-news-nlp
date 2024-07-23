function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ];

    if(names.includes(inputText)) {
        alert("Welcome, Captain!");
    }
    else {
        alert("Enter a valid captain name");
    }
}

function isValidUrl(inputText) {
    try {
        const testUrl = new URL(inputText);
        return testUrl.protocol === 'http:' || testUrl.protocol === 'https:';
      } catch (err) {
        return false;
      }
}


export { checkForName, isValidUrl };
