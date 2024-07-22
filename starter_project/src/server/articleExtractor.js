
import { extract, setSanitizeHtmlOptions } from '@extractus/article-extractor';

const extractArticle = async (url) => {
    setSanitizeHtmlOptions({ allowedAttributes: {}, allowedTags: []});
    try {
        const data = await extract(url);
        return {
          error: 0,
          message: 'article has been extracted successfully',
          data
        };
      } catch (err) {
        return {
          error: 1,
          message: err.message,
          data: null,
        };
      }
}

export { extractArticle as default };

//const testUrl = 'https://www.usatoday.com/story/news/politics/elections/2024/07/19/taktrumps-team-said-the-shooting-sobered-him-thursdays-acceptance-speech-quickly-turned-into-a-rally/74385126007/';
//exec(testUrl)
//.then(result => console.log(result));

