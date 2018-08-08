# simplified-chinese

[![version][version-badge]][package]
[![module formats: umd, cjs, and es][module-formats-badge]][unpkg-dist]
[![MIT License][license-badge]][license]

> A tool to do something with simplified chinese and pinyin.

[![NPM](https://nodei.co/npm/simplified-chinese.png)](https://nodei.co/npm/simplified-chinese/)

## Installation

> npm i --save simplified-chinese

## Getting Started

```
import { convert2Pinyin, getFirstLetters } from 'simplified-chinese';

const pinyin = convert2Pinyin('茉莉花');
console.log('The pinyin of 茉莉花 is: ', pinyin); 
// The pinyin of 茉莉花 is:  MoLiHua

const firstLetters = getFirstLetters('好一朵美丽的茉莉花');
console.log('The first letters of 好一朵美丽的茉莉花 is: ', firstLetters); 
// The first letters of 好一朵美丽的茉莉花 is:  HYDMLDMLH
```

Or you can custorm the value of `convert2Pinyin` and `getFirstLetters`:

```
const { convert2Pinyin, getFirstLetters } from 'simplified-chinese';

const pinyin = convert2Pinyin('茉莉花', { separator: '-' });
console.log('The pinyin of 茉莉花 is: ', pinyin); 
// The pinyin of 茉莉花 is:  Mo-Li-Hua

const firstLetters = getFirstLetters('好一朵美丽的茉莉花', { separator: '>'});
console.log('The first letters of 好一朵美丽的茉莉花 is: ', firstLetters); 
// The first letters of 好一朵美丽的茉莉花 is:  H>Y>D>M>L>D>M>L>H
```

## Test

```
> git clone git@github.com:zollero/simplified-chinese.git
> cd simplified-chinese
> npm i
> npm run test
```

## Docs

> const { convert2Pinyin, getFirstLetters } from 'simplified-chinese';

### convert2Pinyin(words, options)

Return pinyin of the chinese words using the given `words` and `options`. The `words` is a string of chinese words, and the options can cunstorm the return value.

| Arguments | Type | Required | Default | Description |
| :--- |:------:|:----:|-----|:-----:|
| words | string | true | - | A string of chinese words |
| options.separator | string | false | '' | The separator to join the pinyin of words |
| options.capitalizeFirstLetter | boolean | false | true | whether to capitalize the first letter of every word's pinyin |
| options.escapeText | string | false | - | Replace with this text of which is not chinese |


### getFirstLetters(words, options)

Return the first letter of every word of `words` and `options`. The `words` is a string of chinese words, and the options can cunstorm the return value.

| Arguments | Type | Required | Default | Description |
| :--- |:------:|:----:|-----|:-----:|
| words | string | true | - | A string of chinese words |
| options.separator | string | false | '' | The separator to join the first letters |
| options.uppercase | boolean | false | true | Whether to capitalize the letters |

## LICENSE

MIT