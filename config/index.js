const HOME = require('os').homedir();

module.exports = {
  TWEETS_FILE: `${HOME}/delayed-tweets/tweets.json`,
  TWEETS_ARCHIVE: `${HOME}/delayed-tweets/tweets-archive.json`,
  LOG_FILE: `${HOME}/delayed-tweets/logfile.log`,
  DIRECTORY: `${HOME}/delayed-tweets`
}
