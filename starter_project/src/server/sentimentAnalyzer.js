require('dotenv').config();


const analyze = async (text) => {
    const formdata = new FormData();
    formdata.append('key', process.env.key);
    formdata.append('txt', text);
    formdata.append('lang', 'en');

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    
    try {
        const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', requestOptions);
        const status = response.status;
        const body = await response.json();
        return body;

    } catch(error) {
        console.log('error', error);
    }
}

exports.analyze = analyze;

//analyze('This is a simple text')
//.then (result => console.log(result));