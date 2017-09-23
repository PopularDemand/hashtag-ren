const fs = require('fs');
const { promisify } = require('util');
const readFilePromised = promisify(fs.readFile);
const { TWEETS_FILE, TWEETS_ARCHIVE } = require('../config');
const twitter = require('../lib/twitter');

const { handleError, logMessage, formatMessage } = require('./helpers');

async function postTweet() {
  let data = await readFilePromised(TWEETS_FILE).catch(handleError);
  let tweetData = JSON.parse(data);

  if (!tweetData.length) {
    data = await readFilePromised(TWEETS_ARCHIVE).catch(handleError);
    tweetData = JSON.parse(data);
  }

  const tweet = getTweet(tweetData);
  const msg = formatMessage(tweet);
  twitter.postTweet(msg);
  logMessage(`posted: ${JSON.stringify(msg)}`);
};

const getTweet = (tweetData) => {
  const tweet = tweetData[0];
  fs.writeFileSync(TWEETS_FILE, JSON.stringify(tweetData.slice(1,)));
  archiveTweet(tweet);
  return tweet;
};

async function archiveTweet(tweet) {
  let archive = await readFilePromised(TWEETS_ARCHIVE).catch(logMessage);
  archive = JSON.parse(archive);
  archive.push(tweet);
  fs.writeFile(TWEETS_ARCHIVE, JSON.stringify(archive), handleError);
};

module.exports = postTweet;