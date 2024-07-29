function isValidUrl(inputText) {
    try {
        const testUrl = new URL(inputText);
        return testUrl.protocol === 'http:' || testUrl.protocol === 'https:';
      } catch (err) {
        return false;
      }
}


export { isValidUrl };
