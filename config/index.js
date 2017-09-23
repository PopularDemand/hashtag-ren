const HOME = require('os').homedir();

module.exports = {
  TWEETS_FILE: `${HOME}/delayed-tweets/tweets.json`,
  LOG_FILE: `${HOME}/delayed-tweets/logfile.log`,
  DIRECTORY: `${HOME}/delayed-tweets`
}
