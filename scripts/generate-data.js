const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const green = require('chalk').green;
const { TWEETS_FILE } = require('../config');

async function fortune() {
  const { stdout, stderr } = await exec('fortune');
  return stdout;
}

async function getAllFortunes() {
  const fortunes = [];
  for (let i = 0; i < 10; i++) {
    const currentFortune = await fortune();
    logGreen(`adding ${currentFortune}`);
    fortunes.push();
  }
  return fortunes;
}

getAllFortunes()
  .then(data => fs.writeFileSync(TWEETS_FILE, JSON.stringify(data)))
  .catch(console.log);

const logGreen = (msg) => {
  console.log(green(msg));
};
