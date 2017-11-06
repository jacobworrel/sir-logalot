# log
##### A dead simple, declarative Node.js logging library to spice up your development life.
## Usage
```sh
npm install --save-dev logit
```
## API
##### log.label(string, variable)

``` js
const friend = 'fred';
log.label('friend', friend); // prints: friend --> fred
```
##### log.divider()
Prints a string of stars to delineate breakpoints between logs.
``` js
for (let i = 0; i < 2; i += 1) {
  console.log('in outer loop');
  log.divider();
  for (let j = 0; j < 2; j += 1) {
    console.log('in inner loop');
  }
  log.divider();
}
/* prints:
in outer loop
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
in inner loop
in inner loop
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
in outer loop
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
in inner loop
in inner loop
⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️
*/
```
### Symbols:
![symbols](https://s1.postimg.org/1xd8ta71cv/symbols.png)
You may optionally provide a string as an argument to overwrite the default messages.
##### log.error([msg])
##### log.success([msg])
##### log.warning([msg])
##### log.info([msg])

### ASCII Art:
You may optionally provide a string as an argument to overwrite the default messages.
##### log.frog([msg]);
![frog](https://s1.postimg.org/35blmk81hr/frog.png)
##### log.cat([msg]);
![cat](https://s1.postimg.org/76c3klxysv/cat.png)
##### log.cow([msg]);
![cow](https://s1.postimg.org/5wlxsgecjz/cow.png)

### Emojis:
##### log.emoji(key)
```js
log.emoji('hamburger'); // prints: 🍔
```
For a full list of emoji key-value pairs, check out https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json
