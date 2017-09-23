const axios = require('axios');

const url = 'http://quotes.rest/qod.json?category=inspire';

axios.get(url).then((res) => {
  const result = res.contents.quotes[0];
  let quote = result.quote;
  if (parseInt(result.length) > 140) {
    quote = quote.slice(0, 138) + '...';
  }
  
});