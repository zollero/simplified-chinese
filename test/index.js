
const { convert2Pinyin, getFirstLetters } = require('..')
const assert = require('assert')


// const chinese2Pinyin = new Chinese2Pinyin()

// assert.equal(chinese2Pinyin.getFullChars('中'), 'Zhong', '中 字校验失败')
// console.log(`\u001B[32m✓\u001B[39m Zhong`);


describe('Convert chinese word to pinyin spell', () => {
    describe('Test of function of converToPinyin', () => {
        
        it('should return `ZhongGuo` default', () => {
            const value = convert2Pinyin('中国')
            assert.equal(value, 'ZhongGuo')
        })

        it('shoule return `zhongguo` with capitalizeFirstLetter: `false`', () => {
            assert.equal(convert2Pinyin('中国', {
                capitalizeFirstLetter: false
            }), 'zhongguo')
        })

        it('should return `Zhong-Guo` with separator: `-`', () => {
            assert.equal(convert2Pinyin('中国', {
                separator: '-'
            }), 'Zhong-Guo')
        })

        it('should return `zhong==guo` with capitalizeFirstLetter: false and separator: `==`', () => {
            assert.equal(convert2Pinyin('中国', {
                capitalizeFirstLetter: false,
                separator: '=='
            }), 'zhong==guo')
        })
    })

    describe('Test of function of getFirstLetters', () => {

        it('should return `WDZGX` default', () => {
            assert.equal(getFirstLetters('我的中国心'), 'WDZGX')
        })

        it('should return  `W-D-Z-G-X` with separator: `-`', () => {
            assert.equal(getFirstLetters('我的中国心', { separator: '-' }), 'W-D-Z-G-X')
        })

        it('should return `wdzgx` with uppercase: false', () => {
            assert.equal(getFirstLetters('我的中国心', { uppercase: false }), 'wdzgx')
        })

        it('should return `w=d=z=g=x` with separator: `=` and uppercase: false', () => {
            assert.equal(getFirstLetters('我的中国心', { separator: '=', uppercase: false }), 'w=d=z=g=x')
        })
    })
})