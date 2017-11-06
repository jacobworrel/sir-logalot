const emoji = require('./emoji.json');
const ascii = require('./ascii.js');

const log = {};

// emoji json from:
// https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json

// ansi codes from:
// http://bluesock.org/~willkg/dev/ansi.html
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

log.label = (label, value) => {
  console.log(label, '--->', value);
}

log.divider = () => {
  console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
}

log.info = (msg = 'INFO') => {
  console.log("\x1b[36m%s\x1b[1m%s\x1b[0m",'ℹ ', msg);
}

log.success = (msg = 'SUCCESS!') => {
  console.log("\x1b[32m%s\x1b[1m%s\x1b[0m", '✔ ', msg);
}

log.error = (msg = 'ERROR!') => {
  console.log("\x1b[31m%s\x1b[1m%s\x1b[0m", '✖ ', msg);
}

log.warning = (msg = 'WARNING!') => {
  console.log("\x1b[33m%s\x1b[1m%s\x1b[0m", '⚠ ', msg);
}

log.emoji = (name) => {
  if (!emoji[name]) log.error('No emoji by that name! Please check https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json for correct keys.');
  else console.log(emoji[name]);
}

// ASCII ART

log.cat = ascii.cat;
log.frog = ascii.frog;
log.cow = ascii.cow;
