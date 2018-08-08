
import { convertToPinyinOptions, getFirstLettersOptions } from '../src'

interface Chinese {
    
    covertToPinyin(words: string, options?: convertToPinyinOptions): string

    getFirstLetters(words: string, options?: getFirstLettersOptions): string
}
