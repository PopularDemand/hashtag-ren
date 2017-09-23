const fs = require('fs');
const { TWEETS_FILE, LOG_FILE } = require('../config');
const twitter = require('../lib/twitter');

const postTweet = (tweet) => {
  fs.readFile(TWEETS_FILE, 'utf8', (error, tweetData) => {
    if (error) {
      logMessage(error);
    }
    const tweet = getTweet(JSON.parse(tweetData));
    twitter.postTweet(tweet);
    logMessage(`posted: ${tweet}`);
  });
};

const logMessage = (msg) => {
  fs.appendFileSync(LOG_FILE, `[${new Date()}] ${msg}`);
};

const getTweet = (tweetData) => {
  const tweet = tweetData[0];
  fs.writeFile(TWEETS_FILE, JSON.stringify(tweetData.slice(1,)));
  return tweet;
};
