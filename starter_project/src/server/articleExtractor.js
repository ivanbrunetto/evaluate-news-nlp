
import { extract, setSanitizeHtmlOptions } from '@extractus/article-extractor';

async function extractArticle(url) {
    setSanitizeHtmlOptions({ allowedAttributes: {}, allowedTags: []});
    try {
      console.log(`extract(${url})`);  
      const data = await extract(url);
        if (!data) {
          throw new Error (`nothing to extract from ${url}`);
        }

        return {
          error: 0,
          message: 'article has been extracted successfully',
          data
        };
      } catch (err) {
        console.log(err.message);
        return {
          error: 1,
          message: `Could not extract article from "${url}": ${err.message}`,
          data: null,
        };
      }
}

export { extractArticle as default };

//const testUrl = 'https://www.usatoday.com/story/news/politics/elections/2024/07/19/taktrumps-team-said-the-shooting-sobered-him-thursdays-acceptance-speech-quickly-turned-into-a-rally/74385126007/';
//exec(testUrl)
//.then(result => console.log(result));

