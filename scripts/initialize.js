const exists = require('fs').existsSync;
const exec = require('util').promisify(require('child_process').exec);
const green = require('chalk').green;

const { TWEETS_FILE, LOG_FILE, DIRECTORY } = require('../config')

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
    logGreen(`Made file: ${TWEETS_FILE}`);
  }
}

logGreen = (msg) => {
  console.log(green(msg));
};

initialize();