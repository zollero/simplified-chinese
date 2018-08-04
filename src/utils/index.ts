
import isString from 'is-string';

import { FULL_DICT } from '../dict'

interface getEveryLettersOptions {
    // escapable: boolean // escape which is not a simplified chinese word
    escapeText?: string // escape and replace with this text of which is not chinese
}

// interface getPinyinOfWordsOptions {
//     separator?: string // text to join the pinyin of words
//     capitalizeFirstLetter?: boolean // whether to capitalize the first letter of every word's pinyin
// }

type Words = Array<string>

export function getEveryLetters(
    words: string, 
    options: getEveryLettersOptions = {}
): Words {
    const { escapeText } = options

    if (escapeText) {
       return words.split('').map(v => isSimplifiedChineseWord(v) ? v : escapeText)
    } else {
        return typeof words === 'string' ? words.split('') : []
    }
}

export function getPinyinOfWords(
    words: Words, 
    separator: string = '',
    capitalizeFirstLetter: boolean = true
): string {
    return words.map(v => getPiyinOfWord(v, capitalizeFirstLetter)).join(separator)
}

function getPiyinOfWord(word: string, capitalizeFirstLetter: boolean = true): string {
    const keys = Object.keys(FULL_DICT);
    let key
    for (let i = 0; i < keys.length; i++) {
        const value = FULL_DICT[keys[i]]
        if (value.indexOf(word) !== -1) {
            key = capitalizeFirstLetter ? capitalizeTheFirstLetter(keys[i]) : keys[i]
            break;
        }
    }
    return key
}

function capitalizeTheFirstLetter(word: string): string {
    if (isString(word) && word.length > 1) {
        const firstLetter = word.charAt(0)
        return word.replace(new RegExp(`^${firstLetter}`), firstLetter.toLocaleUpperCase())
    }
    return word
}

function isSimplifiedChineseWord(word: string): boolean {
    if (shouldBeString(word)) {
        return word.split('').every(v => isChineseUnicode(v.charCodeAt(0)))
    }
    return false
}

function isChineseUnicode(charCode: number): boolean {
    return charCode >= 19968 && charCode <= 40869
}

function shouldBeString(word: string): boolean {
    if (isString(word)) {
        return true
    } else {
        throw new Error('word is not a string value')
    }
} 