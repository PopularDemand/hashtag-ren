const fs = require('fs');
const { LOG_FILE } = require('../config');

exports.handleError = (error) => {
  if (error) {
    logMessage(error);
    process.exit(1);
  }
};

exports.logMessage = (msg) => {
  fs.appendFileSync(LOG_FILE, `[${new Date()}] ${msg}\n`);
};

exports.formatMessage = (tweetJSON) => {
  const { text, author } = tweetJSON;
  return `${text} - ${author} #beUltimate`;
};
