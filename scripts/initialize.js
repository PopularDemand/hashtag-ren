const exists = require('fs').existsSync;
const exec = require('util').promisify(require('child_process').exec);
const green = require('chalk').green;

const { TWEETS_FILE, LOG_FILE, DIRECTORY, TWEETS_ARCHIVE } = require('../config')

async function initialize() {
  if (!exists(`${DIRECTORY}`)) {
    await exec(`mkdir -p ${DIRECTORY}`);
    logGreen(`Made directory: ${DIRECTORY}`);
  }

  if (!exists(`${LOG_FILE}`)) {
    exec(`touch ${LOG_FILE}`);
    logGreen(`Made file: ${LOG_FILE}`);
  }

  if (!exists(`${TWEETS_FILE}`)) {
    exec(`touch ${TWEETS_FILE}`);
    exec(`echo [] >> ${TWEETS_FILE}`);
    logGreen(`Made file: ${TWEETS_FILE}`);
  }

  if (!exists(`${TWEETS_ARCHIVE}`)) {
    exec(`touch ${TWEETS_ARCHIVE}`);
    exec(`echo [] >> ${TWEETS_ARCHIVE}`);
    logGreen(`Made file: ${TWEETS_ARCHIVE}`);
  }
}

logGreen = (msg) => {
  console.log(green(msg));
};

initialize();