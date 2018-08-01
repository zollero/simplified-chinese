
const { covertToPinyin } = require('..')
const assert = require('assert')


// const chinese2Pinyin = new Chinese2Pinyin()

// assert.equal(chinese2Pinyin.getFullChars('中'), 'Zhong', '中 字校验失败')
// console.log(`\u001B[32m✓\u001B[39m Zhong`);


describe('Covert chinese word to pinyin spell', () => {
    describe('Test of function of coverToPinyin', () => {
        
        it('should return `zhongguo` default', () => {
            const value = covertToPinyin('中国')
            assert.equal(value, 'zhongguo')
        })
    })
})