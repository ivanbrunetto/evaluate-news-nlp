const { fetchEvaluate } = require('../src/client/js/fetchEvaluate');

global.fetch = jest.fn(() => 
    Promise.resolve( {
        json: () => Promise.resolve({ a: 'a'})
    })
);


test("Testing the fetchEvaluate function with txt", () => {
    fetchEvaluate('abc', false);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch.mock.calls[0][1].body).toEqual(new URLSearchParams({type: 'txt', data: 'abc'}));
});

test("Testing the fetchEvaluate function with url", () => {
    fetchEvaluate('abc', true);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch.mock.calls[0][1].body).toEqual(new URLSearchParams({type: 'url', data: 'abc'}));
});