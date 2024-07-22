import dotenv from 'dotenv';
dotenv.config();

const analyzeSentiment = async (text) => {
    const formdata = new FormData();
    formdata.append('key', process.env.key);
    formdata.append('txt', text);
    formdata.append('lang', 'en');

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    }

    const url = 'https://api.meaningcloud.com/sentiment-2.1';
    
    try {
        console.log(`fetch ${url}`);
        const response = await fetch(url, requestOptions);
        const status = response.status;
        const body = await response.json();
                
        if (!status) {
            throw new Error(`cannot call meaningcloud status=${status}`);
        }

        if (body.status.code != '0') {
            console.log('Meaningcloud:', body);
            throw new Error(`Problem with meaningcloud: ${body.status.msg}`);
        }

        console.log(`remaining credits: ${body.status.remaining_credits}`);
        
        return {
            error: 0, 
            message: 'Sentiment processed successfully',
            data: body
        };

        //for testing
        //return mockBody(); 

    } catch(err) {
        console.log(err);
        return {
            error: 1, 
            message: err.message,
            data: null
        };
    }
}

export { analyzeSentiment as default };

//analyze('This is a simple text')
//.then (result => console.log(result));

const mockBody = () => {
    return {
        agreement: 'AGREEMENT',
        confidence: '100',
        irony: 'NONIRONIC',
        model: 'general_en',
        score_tag: 'P',
        sentence_list: [
            {
                agreement: 'AGREEMENT',
                bop: 'y',
                confidence: '100',
                endp: '20',
                inip: '0',
                score_tag: 'P',
                segment_list: [
                    {
                        agreement: 'AGREEMENT',
                        confidence: '100',
                        endp: '20',
                        inip: '0',
                        polarity_term_list: [ 
                            {
                                confidence: '100',
                                endp: '15',
                                inip: '10',
                                score_tag: 'P',
                                text: 'simple'
                            }
                        ],
                        score_tag: 'P',
                        segment_type: 'main',
                        text: 'This is a simple text'
                    }
                ],
                sentimented_concept_list: [],
                sentimented_entity_list: [],
                text: 'This is a simple text'
            }
        ],
        sentimented_concept_list: [],
        sentimented_entity_list: [],
        status: {
            code: '0',
            msg: 'OK',
            credits: '1',
            remaining_credits: '98'
        },
        subjectivity: 'SUBJECTIVE'
    }
}
