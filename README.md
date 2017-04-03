# google-translate-languges-list

google translate languges list

this is a simple `Promise` to get google translate languages list.

## use

npm install ...

```javascript
const getLanguageList = require('google-translate-languages-list');

getLanaguageList('zh-CN') // iso language code
    .then(body => console.log(body))
    .catch(err => console.log(err))
```
- use iso languages code https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

- if you pass `'cn'` to second parameter, it will request another url for avoiding GFW. `but` it is still unstable, test may fail.

## license

MIT
