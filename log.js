const emoji = require('./emoji.json');
const log = {};

// emoji json from:
// https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json

// ansi codes from:
// http://bluesock.org/~willkg/dev/ansi.html
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

log.emoji = (name) => {
  if (!emoji[name]) console.log('No emoji by that name!');
  else console.log(emoji[name]);
}

log.frog = (msg = 'ribbit!') => {
  console.log("\x1b[32m%s\x1b[1m\x1b[0m",`           ${msg}\n             /\n      o  o\n     ( -- )\n  /\\( ,   ,)/\\\n^^   ^^  ^^   ^^`);
};

log.cow = (msg = 'moo!') => {
  console.log(`
    ${msg}
        \\   ^__^
            (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`)
}

log.cat = (msg = 'meow!') => {
  console.log(`
               ${msg}
                /
    /\\_____/\\/
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)`)
}

log.divider = () => {
  console.log('⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️');
}

log.label = (label, value) => {
  console.log(label, '--->', value);
}

log.success = (msg = 'SUCCESS!') => {
  console.log("\x1b[32m%s\x1b[1m%s\x1b[0m", '✔ ', msg);
}

log.info = (msg = 'Info') => {
  console.log("\x1b[36m%s\x1b[1m%s\x1b[0m",'ℹ ', msg);
}

log.error = (msg = 'ERROR!') => {
  console.log("\x1b[31m%s\x1b[1m%s\x1b[0m", '✖ ', msg);
}

log.warning = (msg = 'WARNING!') => {
  console.log("\x1b[33m%s\x1b[1m%s\x1b[0m", '⚠ ', msg);
}

// log.emoji('cloud');
// const friend = 'fred';
// log.cat();
// log.cow();
// log.frog();
// log.divider();
// log.label('friend', friend)
// log.error();
// log.success();
// log.warning();
// log.info();
