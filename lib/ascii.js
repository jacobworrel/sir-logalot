const ascii = {};

ascii.frog = (msg = 'ribbit!') => {
  console.log("\x1b[32m%s\x1b[1m\x1b[0m",`
        ${msg}
          /
      o  o
     ( -- )
  /\\( ,   ,)/\\
^^   ^^  ^^   ^^`);
};

ascii.cow = (msg = 'moo!') => {
  console.log("\x1b[35m%s\x1b[1m\x1b[0m", `
${msg}
    \\   ^__^
        (oo)\\_______
        (__)\\       )\\/\\
            ||----w |
            ||     ||`)
}

ascii.cat = (msg = 'meow!') => {
  console.log("\x1b[33m%s\x1b[1m\x1b[0m", `
              ${msg}
              /
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)`)
}

module.exports = ascii;
